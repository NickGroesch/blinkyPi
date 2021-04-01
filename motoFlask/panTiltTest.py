#!/usr/bin/python
import time
import RPi.GPIO as GPIO
from PCA9685 import PCA9685

print("Testing pantilt PCA9685 routine")
pwm = PCA9685(0x40, debug=True)
pwm.setPWMFreq(50)
# pwm.setServoPulse(1,500)
pwm.setRotationAngle(1, 0)

try:
    for i in range(10,170,1): 
        print(i)
        pwm.setRotationAngle(1, i)   
        if(i<80):
            pwm.setRotationAngle(0, i)   
        time.sleep(0.1)

    for i in range(170,10,-1): 
        print(i)
        pwm.setRotationAngle(1, i)   
        if(i<80):
            pwm.setRotationAngle(0, i)            
        time.sleep(0.1)


    pwm.exit_PCA9685()
    print("\nProgram end")
    exit()

except:
    pwm.exit_PCA9685()
    print("\nProgram dies")
    exit()
