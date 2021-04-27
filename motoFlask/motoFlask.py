import subprocess
from flask import Flask, request, jsonify
from PCA9685 import PCA9685
from flask_cors import CORS
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

#Pan-Tilt-Hat
pwm = PCA9685(0x40)
pwm.start_PCA9685()
pwm.setPWMFreq(50)

#Set the Horizontal vertical servo parameters
HPulse = 1500  #Sets the initial Pulse
HStep = 0      #Sets the initial step length
VPulse = 1500  #Sets the initial Pulse
VStep = 0      #Sets the initial step length

pwm.setServoPulse(1,HPulse)
pwm.setServoPulse(0,VPulse)

app = Flask(__name__)
CORS(app)
cmd = "hostname -I | cut -d' ' -f1"
IP = subprocess.check_output(cmd, shell=True).decode("utf-8")

def lookabout(tilt):
    print(f'look at {tilt}')
    pulsePan = 1100 + (tilt * 50)
    pwm.setServoPulse(1,pulsePan)

def locomote(left, right):
    if left == 0:
        print('sL')
        a.stop()
        b.stop()
    if right == 0:
        print('sR')
        c.stop()
        d.stop()
    if left > 0:
        print('fL')
        a.start(10*left)
        b.stop()
    if left < 0:
        print('rL')
        a.stop()
        b.start(-10*left)
    if right > 0:
        print('fR')
        d.stop()
        c.start(10*right)
    if right < 0:
        print('rR')
        d.start(-10*right)
        c.stop()


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
        lookabout(val[2])
        # newVals = map(lambda x: 10 * x, val)
        pyDict = {'ok': True}
        # pyDict = {'ok': True, "val": list(newVals)}
        response = jsonify(pyDict)
        return response


if __name__ == '__main__':
    app.run(debug=True, 
        port=8228, 
        host="0.0.0.0")
