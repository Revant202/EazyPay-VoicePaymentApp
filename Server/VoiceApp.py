 # Importing necessary modules required
from playsound import playsound
import speech_recognition as sr
from googletrans import Translator
from gtts import gTTS
import os
flag = 0

# A tuple containing all the language and
# codes of the language will be detcted
dic = ('afrikaans', 'af', 'albanian', 'sq',
	'amharic', 'am', 'arabic', 'ar',
	'armenian', 'hy', 'azerbaijani', 'az', 
	'basque', 'eu', 'belarusian', 'be',
	'bengali', 'bn', 'bosnian', 'bs', 'bulgarian',
	'bg', 'catalan', 'ca', 'cebuano',
	'ceb', 'chichewa', 'ny', 'chinese (simplified)',
	'zh-cn', 'chinese (traditional)',
	'zh-tw', 'corsican', 'co', 'croatian', 'hr',
	'czech', 'cs', 'danish', 'da', 'dutch',
	'nl', 'english', 'en', 'esperanto', 'eo',
	'estonian', 'et', 'filipino', 'tl', 'finnish',
	'fi', 'french', 'fr', 'frisian', 'fy', 'galician',
	'gl', 'georgian', 'ka', 'german',
	'de', 'greek', 'el', 'gujarati', 'gu',
	'haitian creole', 'ht', 'hausa', 'ha',
	'hawaiian', 'haw', 'hebrew', 'he', 'hindi',
	'hi', 'hmong', 'hmn', 'hungarian',
	'hu', 'icelandic', 'is', 'igbo', 'ig', 'indonesian',
	'id', 'irish', 'ga', 'italian',
	'it', 'japanese', 'ja', 'javanese', 'jw',
	'kannada', 'kn', 'kazakh', 'kk', 'khmer',
	'km', 'korean', 'ko', 'kurdish (kurmanji)',
	'ku', 'kyrgyz', 'ky', 'lao', 'lo',
	'latin', 'la', 'latvian', 'lv', 'lithuanian',
	'lt', 'luxembourgish', 'lb',
	'macedonian', 'mk', 'malagasy', 'mg', 'malay',
	'ms', 'malayalam', 'ml', 'maltese',
	'mt', 'maori', 'mi', 'marathi', 'mr', 'mongolian',
	'mn', 'myanmar (burmese)', 'my',
	'nepali', 'ne', 'norwegian', 'no', 'odia', 'or',
	'pashto', 'ps', 'persian', 'fa',
	'polish', 'pl', 'portuguese', 'pt', 'punjabi',
	'pa', 'romanian', 'ro', 'russian',
	'ru', 'samoan', 'sm', 'scots gaelic', 'gd',
	'serbian', 'sr', 'sesotho', 'st',
	'shona', 'sn', 'sindhi', 'sd', 'sinhala', 'si',
	'slovak', 'sk', 'slovenian', 'sl',
	'somali', 'so', 'spanish', 'es', 'sundanese',
	'su', 'swahili', 'sw', 'swedish',
	'sv', 'tajik', 'tg', 'tamil', 'ta', 'telugu',
	'te', 'thai', 'th', 'turkish',
	'tr', 'ukrainian', 'uk', 'urdu', 'ur', 'uyghur',
	'ug', 'uzbek', 'uz',
	'vietnamese', 'vi', 'welsh', 'cy', 'xhosa', 'xh',
	'yiddish', 'yi', 'yoruba',
	'yo', 'zulu', 'zu')
def takecommand():
	r = sr.Recognizer()
	with sr.Microphone() as source:
		print("listening.....")
		r.pause_threshold = 1
		audio = r.listen(source)

	try:
		print("Recognizing.....")
		query = r.recognize_google(audio, language='en-in')
		print(f"The User said {query}\n")
	except Exception as e:
		print("say that again please.....")
		return "None"
	return query

def destination_language():
	# print("Enter the language in which you\
	# want to convert : Ex. Hindi , English , etc.")
	# print()
	
	# Input destination language in
	# which the user wants to translate
	to_lang = takecommand()
	while (to_lang == "None"):
		to_lang = takecommand()
	to_lang = to_lang.lower()
	return to_lang

def takecommand_lang():
	r = sr.Recognizer()
	with sr.Microphone() as source:
		print("listening.....")
		r.pause_threshold = 1
		audio = r.listen(source)

	try:
		print("Recognizing.....")
		query = r.recognize_google(audio, language=to_lang)
		print(f"The User said {query}\n")
	except Exception as e:
		print("say that again please.....")
		return "None"
	return query
def query_lang():
	to_lang = takecommand_lang()
	while (to_lang == "None"):
		to_lang = takecommand_lang()
	to_lang = to_lang.lower()
	return to_lang

to_lang = destination_language()

mytextfirst = 'Authentication Type. Say one for fingerprint, say two for face recognition, say three for new account'
mytext1 = 'welcome to the app'
while (to_lang not in dic):
	print("Language in which you are trying\
	to convert is currently not available ,\
	please input some other language")
	print()
	to_lang = destination_language()

to_lang = dic[dic.index(to_lang)+1]


# invoking Translator
translator = Translator()

text_to_translatefirst = translator.translate(mytextfirst, dest=to_lang)

text_1 = text_to_translatefirst.text
speak = gTTS(text=text_1, lang=to_lang, slow=False)

# Using save() method to save the translated
# speech in capture_voice.mp3
speak.save("captured_voicefirst.mp3")

# Using OS module to run the translated voice.
playsound('captured_voicefirst.mp3')
os.remove('captured_voicefirst.mp3')

# Printing Output
print(text_1)
query_first = query_lang()
query_translate_first = translator.translate(query_first, dest='english')
query_text_first = query_translate_first.text
# Translating from src to dest
text_to_translate = translator.translate(mytext1, dest=to_lang)

text = text_to_translate.text
speak = gTTS(text=text, lang=to_lang, slow=False)

# Using save() method to save the translated
# speech in capture_voice.mp3
speak.save("captured_voice.mp3")

# Using OS module to run the translated voice.
playsound('captured_voice.mp3')
os.remove('captured_voice.mp3')

# Printing Output
print(text)

mytext2 = 'Which service would you use.Say one to make payement ,say two to check balance,say three to check account history'


# Translating from src to dest
text_to_translate2 = translator.translate(mytext2, dest=to_lang)

text2 = text_to_translate2.text
speak = gTTS(text=text2, lang=to_lang, slow=False)

# Using save() method to save the translated
# speech in capture_voice.mp3
speak.save("captured_voice2.mp3")

# Using OS module to run the translated voice.
playsound('captured_voice2.mp3')
os.remove('captured_voice2.mp3')

# Printing Output
print(text2)

query = query_lang()
query_translate = translator.translate(query, dest='english')
query_text = query_translate.text

if query_text == 'One':
    text1 = 'to whom do you want to send money'
    text_to_translate = translator.translate(text1, dest = to_lang)
    
    text = text_to_translate.text
    
    speak = gTTS(text = text, lang = to_lang, slow = False)# Using save() method to save the translated# speech in capture_voice.mp3
    speak.save("captured_voice.mp3")
    
    # Using OS module to run the translated voice.
    playsound('captured_voice.mp3')
    os.remove('captured_voice.mp3')
    
    # Printing Output
    print(text)
    query1 = destination_language()
    query_translate1 = translator.translate(query1, dest = 'english')
    query_text1 = query_translate1.text# print(query_text1)


    mytext2 = 'how much money do you want to send'
    text_to_translate2 = translator.translate(mytext2, dest = to_lang)
    
    text2 = text_to_translate2.text
    speak = gTTS(text = text2, lang = to_lang, slow = False)
    
    # Using save() method to save the translated# speech in capture_voice.mp3
    speak.save("captured_voice2.mp3")
    
    # Using OS module to run the translated voice.
    playsound('captured_voice2.mp3')
    os.remove('captured_voice2.mp3')
    
    # Printing Output
    print(text2)
    query2 = query_lang()
    query_translate2 = translator.translate(query2, dest = 'english')
    query_text2 = query_translate2.text# print(query_text2)
    text3 = query_text2 + 'rupees is being transfered to' + query_text1
    text_to_translate3 = translator.translate(text3, dest = to_lang)
    
    text_3 = text_to_translate3.text
    
    speak = gTTS(text = text_3, lang = to_lang, slow = False)
    
    # Using OS module to run the translated voice.
    speak.save("captured_voice3.mp3")
    playsound('captured_voice3.mp3')
    os.remove('captured_voice3.mp3')
    
    # Printing Output
    print(text_3)

elif query_text == 'Two':
    text1 = 'Your acoount balance is'
    text_to_translate = translator.translate(text1, dest = to_lang)
    
    text = text_to_translate.text
    
    speak = gTTS(text = text, lang = to_lang, slow = False)# Using save() method to save the translated# speech in capture_voice.mp3
    speak.save("captured_voice.mp3")
    
    # Using OS module to run the translated voice.
    playsound('captured_voice.mp3')
    os.remove('captured_voice.mp3')
    
    # Printing Output
    print(text)
elif query_text == '3:00':
    text1 = 'Your acoount history is'
    text_to_translate = translator.translate(text1, dest = to_lang)
    
    text = text_to_translate.text
    
    speak = gTTS(text = text, lang = to_lang, slow = False)# Using save() method to save the translated# speech in capture_voice.mp3
    speak.save("captured_voice.mp3")
    
    # Using OS module to run the translated voice.
    playsound('captured_voice.mp3')
    os.remove('captured_voice.mp3')
    
    # Printing Output
    print(text)

text4 = 'Thank you for using the app'
text_to_translate4 = translator.translate(text4, dest = to_lang)

text_4 = text_to_translate4.text

speak = gTTS(text = text_4, lang = to_lang, slow = False)# Using save() method to save the translated# speech in capture_voice.mp3
speak.save("captured_voice3.mp3")

# Using OS module to run the translated voice.
playsound('captured_voice3.mp3')
os.remove('captured_voice3.mp3')

# Printing Output
print(text_4)
