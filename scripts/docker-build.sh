#!/bin/bash

# default image name (if not passed into script as env variable)
IMAGE=${IMAGE:-authzen-gateway-proxy}

docker build --tag ghcr.io/aserto-dev/$IMAGE .