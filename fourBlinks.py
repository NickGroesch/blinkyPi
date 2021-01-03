# Write your code here :-)

import RPi.GPIO as IO
import time

IO.setwarnings(True)

IO.setmode(IO.BOARD)
IO.setup(37, IO.OUT)
IO.setup(35, IO.OUT)
IO.setup(33, IO.OUT)
IO.setup(31, IO.OUT)
IO.output(37,1)
time.sleep(1)
IO.output(37,0)
#IO.setup(35, IO.OUT)
IO.output(35,1)
time.sleep(1)
IO.output(35,0)
time.sleep(1)
#IO.setup(33, IO.OUT)
IO.output(33,1)
time.sleep(1)
IO.output(33,0)
#IO.setup(31, IO.OUT)
IO.output(31,1)
time.sleep(1)
IO.cleanup()