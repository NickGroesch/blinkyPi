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


def clockwise(tenth):
    a.start(tenth * 11)
    b.stop()
    c.stop()
    d.start(tenth * 11)


def counter_clockwise(tenth):
    a.stop()
    b.start(tenth * 11)
    c.start(tenth * 11)
    d.stop()


def end():
    a.stop()
    b.stop()
    c.stop()
    d.stop()
    io.cleanup()
    exit()


io.output(ctl1_pin, 1)
io.output(ctl2_pin, 1)
clockwise(0)
while True:
    cmd = input("Command, f/r/e 0..9, E.g. f5 :")
    direction = cmd[0]
    if direction == "f":
        clockwise(int(cmd[1]))
    elif direction == "e":
        end()
    else:
        counter_clockwise(int(cmd[1]))
    #speed = int(cmd[1]) * 11
    #set("duty", str(speed))
