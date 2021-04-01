#!/usr/bin/python
import time
import RPi.GPIO as GPIO
from PCA9685 import PCA9685

print("Testing pantilt PCA9685 routine")
pwm = PCA9685(0x40, debug=True)
pwm.start_PCA9685()
pwm.setPWMFreq(50)

first=int(input('0 val'))
second=int(input('1000val'))
pwm.setServoPulse(first, second) 
