from pydub import AudioSegment
import os
import fleep
import flask
import werkzeug
from gtts import gTTS
from googletrans import Translator
import speech_recognition as sr
from playsound import playsound
from flask import Flask, redirect
from flask import request
from flask import Response
from flask_cors import CORS
from pprint import pprint
import json, sndhdr

app = Flask(__name__)
CORS(app)


@app.route('/')
def helloWorld():
    return "hello world"

@app.route('/audio', methods=['POST','GET'])
def upload_audio():
    if request.method == 'POST':
        data=request.get_data();
    
        f=open("output/audio",'wb+')
        f.write(data)
        f.close()

        with open("output/audio", "rb") as file:
            info = fleep.get(file.read(128))
        print(info.extension)

        m4a_file = 'output/audio'
        wav_filename = r"output/audio.wav"
        track = AudioSegment.from_file(m4a_file,  format='m4a')
        file_handle = track.export(wav_filename, format='wav')
        r = sr.Recognizer()
        with sr.AudioFile(file_handle) as source:
            text = r.listen(source)
        try:
            text_output = r.recognize_google(text, language="ta-IN")
            print('Converting speech into text ...')
            print(text_output)
        except:
            print("sorry")
        translator = Translator()
        response = translator.translate(text_output)
        print(response.text)
        return json.dumps(response.text)


if __name__ == "__main__":
    app.run(host='192.168.0.101', port=5000, debug=True)
    
