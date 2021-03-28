import subprocess
from flask import Flask, request, jsonify
app = Flask(__name__)

cmd = "hostname -I | cut -d' ' -f1"
IP = subprocess.check_output(cmd, shell=True).decode("utf-8")


@app.route('/')
def index():
    return 'Hello world'


@app.route('/api', methods=['PUT'])
def api():
    # The docs say don't get_data (json) without checking content length (i'm thinking ping of death)
    if request.content_length > 100000:
        return "Nasty of you to do me like that"
    else:
        val = request.get_json()
        print(val)
        pyDict = {'ok': True, "val": val}
        return jsonify(pyDict)


if __name__ == '__main__':
    app.run(debug=True, port=8228, host=IP)
