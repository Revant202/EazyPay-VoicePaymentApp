from flask import Flask
from flask import request
from flask import Response
from flask_cors import CORS
from pprint import pprint
import json

app = Flask(__name__)
CORS(app)


@app.route('/')
def helloWorld():
    return "hello world"

@app.route('/audio', methods=['POST','GET'])
def process_audio():
    data = request.get_data()
    data_length = request.content_length

    if (data_length > 1024 * 1024 * 10):
        return 'File too large!', 400

    # process data here:
    print ("Processing data: ", data)

    return json.dumps({ "text": "Audio fucked!" }), 200


if __name__ == "__main__":
    app.run(host='192.168.0.100', port=5000, debug=True)
