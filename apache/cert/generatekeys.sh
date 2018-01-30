#!/bin/sh
FILE_NAME=datkom

openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout "$FILE_NAME.key" -days 365 -out "$FILE_NAME.crt" -config ./req.cnf

# OPTIONAL - write an info to see the details of the generated crt
openssl x509 -noout -fingerprint -text < "$FILE_NAME.crt" > "$FILE_NAME.info"
