import RPi.GPIO as IO
import time

pinList = [37, 35, 33, 31, 40, 38, 36]


def setup(outList, inList):
    IO.setwarnings(True)
    IO.setmode(IO.BOARD)
    IO.setup(outList, IO.OUT)
    IO.setup(inList, IO.IN)


def blinkMe(gpioNum, duration):
    IO.output(gpioNum, 1)
    time.sleep(duration)
    IO.output(gpioNum, 0)


def shutdown():
    IO.cleanup()
    print("releasing resources makes me feel so fresh")


# testing the 7 blinks
setup(pinList, None)
for pin in pinList:
    blinkMe(pin, 1)
shutdown()
