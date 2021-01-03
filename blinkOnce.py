# Write your code here :-)
import RPi.GPIO as IO
import time

IO.setwarnings(True)

IO.setmode(IO.BOARD)
IO.setup(37, IO.OUT)
IO.output(37,1)
time.sleep(1)
IO.cleanup()
time.sleep(1)