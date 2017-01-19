# Docker Compose

Create a compose file containing

```
version: '2'

services:
  blog:
    image: unibaktr/datkom-ghost

  proxy:
    image: unibaktr/datkom-caddy
    ports:
      - 80:80
      - 443:443
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
