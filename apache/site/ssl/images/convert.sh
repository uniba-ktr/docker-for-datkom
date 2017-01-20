#!/bin/bash
FILES=$(ls *.jpg)

for i in $FILES
do
	echo "Processing image $i ..."
	convert -thumbnail 96 $i thumbs/$i
done
