import RPi.GPIO as IO
import time


pinList = [37, 35, 33, 31, 40, 38, 36]


def setup(outList, inList):
    IO.setwarnings(True)
    IO.setmode(IO.BOARD)
    IO.setup(outList, IO.OUT)
    if inList:
        IO.setup(inList, IO.IN)


def blinkMe(gpioNum, duration):
    IO.output(gpioNum, 1)
    time.sleep(duration)
    IO.output(gpioNum, 0)


def shutdown():
    IO.cleanup()
    print("releasing resources makes me feel so fresh")


def pinTest():
    for pin in pinList:
        blinkMe(pin, 1)


# testing the 7 blinks
setup(pinList, None)
pinTest()
blinkMe(pinList, 5)
shutdown()
