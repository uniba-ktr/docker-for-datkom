[![](https://images.microbadger.com/badges/version/unibaktr/datkom-apache.svg)](https://microbadger.com/images/unibaktr/datkom-apache "Get your own version badge on microbadger.com") [![](https://images.microbadger.com/badges/image/unibaktr/datkom-apache.svg)](https://microbadger.com/images/unibaktr/datkom-apache "Get your own image badge on microbadger.com") [![Build Status](https://travis-ci.org/uniba-ktr/docker-for-datkom.svg?branch=master)](https://travis-ci.org/uniba-ktr/docker-for-datkom)

# Starting

```
docker run -d -p 80:80 -p 443:443 --name apache unibaktr/datkom-apache
```

# Stopping and Removing

```
docker rm -f apache
```

# Accessing the Webpage

Open up the browser of your choice and point to [localhost](http://localhost)
