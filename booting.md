## BURN IMAGE
once you have a older named `boot` we will create.edit 3 files in `boot/`

### wpa_supplicant.conf
* "The name of the file should be wpa_supplicant.conf and its contents will get copied to the system folder at boot time. It will then be deleted. So this a one time only process."

* Here is the file : don't put extra spaces around the `=` and leave quotes around ssid and password
```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US
 
network={
    ssid="YOURSSID"
    psk="YOURPASSWORD"
    scan_ssid=1
}
```
### config.txt
we add `enable_uart=1` to the bottom
I uncommented 
```
dtparam=i2c_arm=on
dtparam=spi=on
```
### ssh 
by adding this empty file the system enables ssh at boot time

## TIME TO BOOT

if you cant ssh in use a console cable to diagnose why \(because we enabled uart above now we can \) [\[red=5v,,black=grd,white,green,...],[,,,,,]]
```
picocom -b 115200 /dev/tty.usbserial-0001 
```
else ssh with basic `pi:raspberry@<host>`

once you are in 
* use `passwd` to change your login password
* use 'raspi-config' to change hostname

### INSTALL piOLED

update `sudo apt update` 

and then upgrade `sudo apt upgrade`

install pip3 `sudo apt install python3-pip`

install circuitPython `sudo pip3 install adafruit-circuitpython-ssd1306`

install PIL `sudo apt-get install python3-pil`

install this: `sudo apt-get install libopenjp2-7`

try to detect I2C with `sudo i2cdetect -y 1` looking for `3c`

install git with `sudo apt install git`

[set up git](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git)

clone the repo `git clone git@github.com:NickGroesch/blinkyPi.git`

run `python3 stats.py`

if wiring piOLED: `[[],[]]`