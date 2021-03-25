from flask import Flask
app = Flask(__name__)

cmd = "hostname -I | cut -d' ' -f1"
IP = subprocess.check_output(cmd, shell=True).decode("utf-8")


@app.route('/')
def index():
    return 'Hello world'


if __name__ == '__main__':
    app.run(debug=True, port=8228, host=IP)
