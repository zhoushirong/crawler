#!/usr/bin/expect -f
set password 321go
spawn scp ubuntu@123.xx.xx.xx:/data1/htdoc
set timeout 300
expect ubuntu@123.xx.xx.xx 321go
set timeout 300
send "$password\r"
set timeout 300
send "exit\r"
expect eof
