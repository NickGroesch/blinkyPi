import time
import subprocess
import board
import busio
from adafruit_lis3mdl import LIS3MDL
from adafruit_lsm6ds.lsm6ds33 import LSM6DS33


i2c = busio.I2C(board.SCL, board.SDA)
senseMag = LIS3MDL(i2c)
senseGyro = LSM6DS33(i2c)

cmd = "hostname -I | cut -d' ' -f1"
IP = subprocess.check_output(cmd, shell=True).decode("utf-8")

while True:
    print("Acceleration: X:%.2f, Y: %.2f, Z: %.2f m/s^2" %
          (senseGyro.acceleration))
    print("Gyro X:%.2f, Y: %.2f, Z: %.2f radians/s" % (senseGyro.gyro))
    print("")
    #mag_x, mag_y, mag_z = senseMag.magnetic
    print("Magnetic X:{0:10.2f}, Y:{1:10.2f}, Z:{2:10.2f} uT" % (
        senseMag.magnetic))
    time.sleep(0.5)
