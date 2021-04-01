#!/usr/bin/python
import time
import RPi.GPIO as GPIO
from PCA9685 import PCA9685

try:
    print("This is an PCA9685 routine")
    pwm = PCA9685()
    pwm.setPWMFreq(50)
    # pwm.setServoPulse(1,500)
    pwm.setRotationAngle(1, 0)

   

    for i in range(45, 135, 1):
        print(i)
        pwm.setRotationAngle(1, i)
        if(i < 80):
            pwm.setRotationAngle(0, i)
        time.sleep(0.1)

    for i in range(135, 45, -1):
        pwm.setRotationAngle(1, i)
        if(i < 80):
            pwm.setRotationAngle(0, i)
        time.sleep(0.1)

    for i in range(135, 45, -1):
        pwm.setRotationAngle(2, i)
        if(i < 80):
            pwm.setRotationAngle(3, i)
        time.sleep(0.1)

    pwm.exit_PCA9685()
    print("\nProgram end")
    exit()

except:
    pwm.exit_PCA9685()
    print("\nProgram end")
    exit()
