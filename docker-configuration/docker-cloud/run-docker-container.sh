# Detect host machine IP Address (we need this when run in docker container)
#export CB_LOCAL_HOST_ADDR=$(ip | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)
export CB_LOCAL_HOST_ADDR=$(ip addr show | grep -E "inet\s" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f1 -d/ | head -n1)

docker run \d --name cloudbeaver --restart unless-stopped -p 8978:8978 --add-host=host.docker.internal:${CB_LOCAL_HOST_ADDR} -v /var/cloudbeaver/workspace:/opt/cloudbeaver/workspace dbeaver/cloudbeaver:latest

