import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(11, GPIO.IN)  # Read output from PIR motion sensor
while True:
    i = GPIO.input(11)
    if i == 1:  # When output from motion sensor is LOW
        print(f"Intruder detected ${time.time()}")
    time.sleep(0.1)
