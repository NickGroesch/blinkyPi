## Burn Image
once you have a older named `boot` we will create.edit 3 files in `boot/`

### wpa_supplicant.conf
* "The name of the file should be wpa_supplicant.conf and its contents will get copied to the system folder at boot time. It will then be deleted. So this a one time only process."

* Here is the file : don't put extra spaces around the `=`
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

### ssh 
by adding this empty file the system enables ssh at boot time