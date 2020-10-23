# Configuration

Declare the following test domains in your `/etc/hosts`

```127.0.0.1 publisher-domain.com cross-origin-domain.com```

# Install

```npm i```

# Run 

```nodemon server.js```

It should start two HTTP apps and listen on 2 ports 9000 and 9001

Navigate to http://publisher-domain.com:9000/index.html 

# Referrer Policies

![Referrer Policies](https://webdev.imgix.net/referrer-best-practices/referrer-policies.jpg)