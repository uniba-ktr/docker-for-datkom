# Docker Compose

Create a compose file containing

```
version: '2'

networks:
  backend:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 192.168.7.0/25

services:
  blog:
    image: unibaktr/datkom-ghost
    networks:
      backend:
        ipv4_address: 192.168.7.3

  proxy:
    image: unibaktr/datkom-caddy
    ports:
      - 80:80
      - 443:443
    networks:
      backend:
        ipv4_address: 192.168.7.2

```

# Starting

```
docker-compose up -d
```

# Stopping and Removing

```
docker-compose down -v
```

# Accessing the Webpage

Open up the browser of your choice and point to [localhost](http://localhost)
