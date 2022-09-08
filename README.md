# The Stuff - 7.02 Exploit Menu
https://lesking72.github.io/ps4

## Self-Hosting
Clone this repository or [download the zip](https://github.com/Lesking72/ps4/archive/refs/heads/master.zip) and host it with [some HTTP server](https://sourceforge.net/projects/miniweb/).

## Adding your own payloads
Payloads are stored as a uInt8 byte array.  
After converting your payload to this format, place its JS file in /payloads and
link to `exploit.html#f=<js_file_name>`.

This host also supports sending bin-format payloads to GoldHEN's bin loader. These
payloads are placed in /payloads_bin and loaded by calling `binload('name');`. This
function does not work when the webpage is loaded over https. If you can't self-host,
use [Payload Guest](https://github.com/Al-Azif/ps4-payload-guest)

## Credits
TheFloW - kernel exploit  
Synacktiv - WebKit exploit  
Sleirsgoevy - 7.02 exploit implementation  
ChendoChap - VTX HEN for 7.02  
SiSTRo - GoldHEN  
OpenOrbis - Mira framework  
Al Azif - utility payloads  
tihmstar - 7.02 offsets in the Linux loader  
...and many others  
