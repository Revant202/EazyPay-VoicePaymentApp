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


        # file = request.form.getlist('file')[0]
        # # filename = request.form.getlist('file')
        # data = request.form['file']
        # check if the post request has the file part
        # if 'file' not in request.files:
        #     return "No file part"
        # # If the user does not select a file, the browser submits an
        # # empty file without a filename.
        # if file.filename == '':
        #    return "No selected file"
        # if (file.content_length > 1024 * 1024 * 10):
        #     return 'File too large!', 400
        # # process data here
        # print(file)
        # print(type(file))
        # f=open("output/myfile.txt","wb+")
        # f.write(d)
        # f.close()
        return json.dumps("ok")


if __name__ == "__main__":
    app.run(host='192.168.29.121', port=5000, debug=True)
