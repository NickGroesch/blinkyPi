## BURN IMAGE
once you have a folder named `boot` we will create.edit 3 files in `boot/`

### wpa_supplicant.conf
* "The name of the file should be wpa_supplicant.conf and its contents will get copied to the system folder at boot time. It will then be deleted. So this a one time only process."

* Here is the template: don't put extra spaces around the `=` and leave quotes around ssid and password
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

once you are in use raspi-config to
* change your login password
* change hostname
* enable camera

update `sudo apt update` 

and then upgrade `sudo apt upgrade`

install pip3 `sudo apt install python3-pip`

install circuitPython `sudo pip3 install adafruit-circuitpython-ssd1306`

install PIL `sudo apt-get install python3-pil`

`sudo pip3 install picamera`
### INSTALL piOLED


install this: `sudo apt-get install libopenjp2-7`

try to detect I2C with `sudo i2cdetect -y 1` looking for `3c`

### INSTALL GIT

install git with `sudo apt install git`

`git config --global user.name "Mona Lisa"`

`git config --global user.email "email@example.com"`

`eval "$(ssh-agent -s)"`

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

`touch ~/.ssh/config` and then put in 

```
Host *
  AddKeysToAgent yes
  UseKeychain yes #DELETE THIS LINE IF YOU HAVE EMPTY PASSPHRASE
  IdentityFile ~/.ssh/id_rsa
```

`ssh-add ~/.ssh/id_rsa`

copy the publickey into github

clone the repo `git clone git@github.com:NickGroesch/blinkyPi.git`

clone the repo `git clone git@github.com:NickGroesch/krs.git`

run `python3 stats.py`

if wiring piOLED: `[[],[]]`

edit `/etc/rc.local` and run your command with a fork (ending the line with a single ampersand) a;a:





```
sudo python3 /home/pi/krs/atomicEmitter.py & 
```

