# The Stuff - 7.02 Exploit Menu
https://lesking72.github.io/ps4

## Self-Hosting
Clone this repository or [download the zip](https://github.com/Lesking72/ps4/archive/refs/heads/master.zip) and host it with [some HTTP server](https://sourceforge.net/projects/miniweb/).

## Adding your own payloads
Payloads are provided in mira_blob_2 format; each byte is written as a uInt8 array.  
After converting your payload to this format, place its JS file in /payloads and
link to `exploit.html#f=<js_file_name>`

## Credits
TheFloW - kernel exploit  
Synacktiv - WebKit exploit  
Sleirsgoevy - 7.02 exploit implementation  
ChendoChap - VTX HEN for 7.02  
SiSTRo - GoldHEN  
OpenOrbis - Mira framework  
_AlAzif - utility payloads  
tihmstar - 7.02 offsets in the Linux loader  
...and many others  
