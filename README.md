# Ezpay - Voice Payment App

Ezpay is a multilingual voice-controlled payment application developed using React Native and Python Flask. It provides a seamless payment experience with voice commands and supports 19 Indian regional languages.

## Features

- Perform transactions, check balance or view transaction history using voice commands securely with two-factor authentication.
- Supports 19 Indian regional languages (5 tested), with voice instructions for illiterate and blind people.
- Created Translator API using gTTS, ASR, GoogleTrans, and PyDub.


## How the app works?
- Select your preferred language, all the text in the app will be changed to that language.
- Use Mic button to give voice commands in your selected language. Eg, speak - "pay 500 rupees to <person's name>" or "check balance" or "transaction history" etc
- if you give a voice command to pay someone, a conformation screen appears where you have to check the payment details and confirm it using fingerprint.
- Get voice instuctions in your specified language by pressing the info button.
- For illiterate and blind people, voice instructions can be enabled for every screen and the mic can be turned on/off using the volume button. 

## Screenshots

## Tech Stack

- React Native
- Python Flask


## Installation

1. Clone the repository.
2. cd clent && npm i
3. start venv by cd server/env/Scripts && ./activate
4. cd server && pip install -r requirements.txt
5. run npm start to start the client, install expo go app in your phone and scan the QR code.
6. Run the application using `npm start` and `python app.py`.


