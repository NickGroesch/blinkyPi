import subprocess
from flask import Flask, request, jsonify
import RPi.GPIO as io

io.setmode(io.BCM)
ctl1_pin = 26
in1_pin = 19
in2_pin = 13

ctl2_pin = 21
in3_pin = 20
in4_pin = 16

io.setup(ctl1_pin, io.OUT)  # , pull_up_down=io.PUD_UP)
io.setup(ctl2_pin, io.OUT)  # , pull_up_down=io.PUD_UP)
io.setup(in1_pin, io.OUT)
io.setup(in2_pin, io.OUT)
io.setup(in3_pin, io.OUT)
io.setup(in4_pin, io.OUT)

a = io.PWM(in1_pin, 500)  # channel=12 frequency=50Hz
b = io.PWM(in2_pin, 500)  # channel=12 frequency=50Hz
c = io.PWM(in3_pin, 500)  # channel=12 frequency=50Hz
d = io.PWM(in4_pin, 500)  # channel=12 frequency=50Hz

app = Flask(__name__)

cmd = "hostname -I | cut -d' ' -f1"
IP = subprocess.check_output(cmd, shell=True).decode("utf-8")


def locomote(left, right):
    if (left == 0 and right == 0):
        a.stop()
        b.stop()
        c.stop()
        d.stop()
    if left > 0:
        a.start(left)
    if left < 0:
        b.start(left)
    if right > 0:
        c.start(right)
    if right < 0:
        d.start(right)


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
        locomote(val[0], val[1])
        newVals = map(lambda x: 10 * x, val)
        pyDict = {'ok': True, "val": list(newVals)}
        return jsonify(pyDict)


if __name__ == '__main__':
    app.run(debug=True, port=8228, host=IP)
