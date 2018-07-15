#!/usr/bin/env bash

sudo docker build --no-cache -t social-media:api-express .
sudo docker tag social-media:api-express apatterson189/social-media:api-express
sudo docker push apatterson189/social-media:api-express
