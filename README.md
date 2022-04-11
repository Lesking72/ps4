# The Stuff - 7.02 Exploit Menu
https://lesking72.github.io/ps4

## Self-Hosting
Clone this repository or [download the zip](https://github.com/Lesking72/ps4/archive/refs/heads/master.zip) and host it with [some HTTP server](https://sourceforge.net/projects/miniweb/).

## Adding your own payloads
"primary" payloads such as HENs should be converted to base64 and put in /payloads. If creating these files with a tool like base64encode.org, make sure the destination character set is set to binary. After converting your payload to this format, put it in /payloads and link to `exploit.html#<file_name>`.

This host also supports sending bin-format payloads to GoldHEN's bin loader. These
payloads are placed in /payloads_bin and loaded by calling `binload('name');`.

## Credits
Sleirsgoevy, Nazky and tihmstar - Linux Loaders  
SiSTRo - GoldHEN  
Al Azif - Utility payloads, base64 payload loader  
Synacktiv - WebKit exploit  
Sleirsgoevy - ported WebKit exploit to 7.02  
Andy Nguyen - kernel exploit  
ChendoChap - Full chain for 7.02  