#!/bin/sh

docker run -d --name pharma-quiz-app-builder -v "$PWD":/usr/src/app -w /usr/src/app node sleep infinity
