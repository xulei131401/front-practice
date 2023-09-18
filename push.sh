#!/usr/bin/bash env

git config --global http.proxy http://127.0.0.1:19181
git config --global https.proxy https://127.0.0.1:19181

git push origin main

git config --global --unset http.proxy
git config --global --unset https.proxy