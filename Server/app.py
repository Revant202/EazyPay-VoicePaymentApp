from pydub import AudioSegment
import fleep
from gtts import gTTS
from googletrans import Translator
import speech_recognition as sr
from flask import Flask,request,send_file
from flask_cors import CORS
from data import langList,dic,units,tens,scales
from func import text2int
import json
# import socket
# hostname = socket.gethostname()
# IPAddr = socket.gethostbyname(hostname)
app = Flask(__name__)
CORS(app)
translator = Translator()
lang = 'en'


@app.route('/setLang', methods=['POST'])
def set_lang():
    global lang
    lang = langList[langList.index(request.json['language'].lower())+1]
    print("language sucessfully set to " + lang)
    return ("language sucessfully set to " + lang)

@app.route('/transText/headings', methods=['POST'])
def transHeadings():
    textDict = request.json['text']
    for key in textDict:
        txt = translator.translate(textDict[key], src='en', dest=lang)
        textDict[key] = txt.text
    print(lang, textDict)
    return json.dumps(textDict)
  

@app.route('/transText/details', methods=['GET'])
def transDetails():
    name = request.args.get('name')
    newDic= {"name": translator.translate(dic[name]["name"], src='en', dest=lang).text,
            "contact_no": translator.translate(dic[name]["contact_no"], src='en', dest=lang).text,
            "UPI_ID": dic[name]["UPI_ID"],
            "bank_name": translator.translate(dic[name]["bank_name"], src='en', dest=lang).text}
    print(lang, newDic)
    return json.dumps(newDic)

@app.route('/transText/details/all', methods=['GET'])
def transDetailsall():
    newDic = {}
    for name in dic:
        newDic[name] = {"name": translator.translate(dic[name]["name"], src='en', dest=lang).text,
                "contact_no": translator.translate(dic[name]["contact_no"], src='en', dest=lang).text,
                "UPI_ID": dic[name]["UPI_ID"],
                "bank_name": translator.translate(dic[name]["bank_name"], src='en', dest=lang).text}
    print(lang, newDic)
    return json.dumps(newDic)

@app.route('/transAudio', methods=['POST'])
def transAudio(): 
        translator = Translator()
        translated = translator.translate(request.json["speak"]["text"], src='en', dest=lang)
        text_1 = translated.text
        print(text_1)
        audio = gTTS(text=text_1, lang=lang, slow=False)
        path= "output/trans_voice.mp3"
        audio.save(path)
        wav_filename = r"output/trans_voice.wav"
        track = AudioSegment.from_file(path,  format='mp3')
        file_handle = track.export(wav_filename, format='wav')
        # with open(wav_filename, "rb") as file:
        #     info = fleep.get(file.read(128))
        # print(info.extension)
        # print(info.mime)
        return json.dumps("ok")
    

@app.route('/getAudio', methods=['POST', 'GET'])
def getAudio():
    try:
        return send_file(
            "output/trans_voice.wav",
            mimetype="audio/wav",
            as_attachment=True,
            attachment_filename="trans_voice.wav")
    except Exception as e:
        return str(e)
    
@app.route('/audio', methods=['POST', 'GET'])
def upload_audio():
    r = sr.Recognizer()
    if request.method == 'POST':
        data = request.get_data()

        f = open("output/audio", 'wb+')
        f.write(data)
        f.close()

        with open("output/audio", "rb") as file:
            info = fleep.get(file.read(128))
        print(info.extension)
        m4a_file = 'output/audio'
        wav_filename = r"output/audio.wav"
        track = AudioSegment.from_file(m4a_file,  format='m4a')
        file_handle = track.export(wav_filename, format='wav')

        with sr.AudioFile(file_handle) as source:
            text = r.listen(source)
        try:
            text_output = r.recognize_google(text, language=lang)
            print('Converting speech into text ...')
            print(text_output)
            response = translator.translate(text_output)
            text = response.text.lower()
            print(text)
            input_words = list(text.split(" "))
            words = list(text.split(" "))
            rem = ["to", "rupees", "make", "of","were" ,*scales, *tens, *units]
            amount = -1
            action = 0
            for x in input_words:
                print(x)
                if (x.isnumeric()):
                    amount = int(x)
                    words.remove(x)
                if (x[0] == "₹"):
                    amount = int(x[1:])
                    words.remove(x)
                if (x == "pay" or x == "payment" or x == "send" or x == "transfer" or x == "give" or x == "sent"):
                    action = 1
                    words.remove(x)
                if (x == "balance"):
                    action = 2
                    words.remove(x)
                if (x == "transaction" or x == "history"):
                    action = 3
                    words.remove(x)
                if x in rem:
                    words.remove(x)
            name = words[0]
            if(action == 1):
                if amount == -1:
                    amount = text2int(" ".join([input_words[input_words.index("rupees")-2], input_words[input_words.index("rupees")-1]]))
                if name in dic:
                    acc_details = dic[name]
                else:
                    acc_details = {"name": "not found", "contact_no": "not found",
                                "UPI_ID": "--", "bank_name": "--"},
                res = {"action": action, "amount": amount, "name": acc_details}
            else:
                res = {"action": action, "amount": 0, "name": "--"}
            print(res)
            return json.dumps(res)
        except:  
            text = "sorry, could'nt get that"
            print(text)
        
        return json.dumps(text)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

