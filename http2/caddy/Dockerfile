FROM alpine:3.5
MAINTAINER Marcel Grossmann <whatever4711@gmail.com>

ENV arch amd64
ENV url "https://caddyserver.com/download/build?"
ENV params "&features=ratelimit%2Crealip"
RUN apk add --update --no-cache openssh-client curl git tar

RUN mkdir /caddysrc && CADDYARCH=$(echo "${arch}" | sed -e "s/armhf/arm/g") && \
    curl -sL -o /caddysrc/caddy_linux_arm.tar.gz "${url}os=linux&arch=${CADDYARCH}${params}" && \
    tar -xf /caddysrc/caddy_linux_arm.tar.gz -C /caddysrc && \
    mv /caddysrc/caddy /usr/bin/caddy && \
    chmod 755 /usr/bin/caddy && \
    rm -rf /caddysrc && \
    printf "localhost:80" > /etc/Caddyfile

RUN mkdir -p /root/.caddy/acme
EXPOSE 80 443 2015
COPY ./Caddyfile /etc/Caddyfile
COPY ./certs /etc/certs

ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--agree", "--conf", "/etc/Caddyfile"]

LABEL \
    version=0.9.4 \
    os="linux" \
    arch="amd64"
