FROM alpine:3.5
MAINTAINER Marcel Grossmann <whatever4711@gmail.com>

ENV arch amd64
RUN apk add --update --no-cache apache2 apache2-ssl php7-apache2 && \
    mkdir -p /var/www /run/apache2 && \
    sed -i -e 's|#LoadModule rewrite_module modules/mod_rewrite.so|LoadModule rewrite_module modules/mod_rewrite.so|g' \
        -e 's|#LoadModule auth_digest_module modules/mod_auth_digest.so|LoadModule auth_digest_module modules/mod_auth_digest.so|g' \
        /etc/apache2/httpd.conf

COPY site /var/www
COPY cert /etc/apache2/cert
COPY auth /etc/apache2/auth
COPY http.conf /etc/apache2/conf.d/http.conf
COPY https.conf /etc/apache2/conf.d/https.conf

EXPOSE 80 443
ENTRYPOINT [ "httpd", "-D", "FOREGROUND" ]

LABEL \
    os="linux" \
    arch="amd64"
