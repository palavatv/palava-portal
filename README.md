# Palava Portal

The palava portal is the single-page web application that runs [palava.tv](https://palava.tv). It is built using the following technologies:

- [Palava Client](https://github.com/palavatv/palava-client)
- [Middleman](http://middlemanapp.com/)
- [CoffeeScript](http://coffeescript.org/)
- [AngularJS](http://angularjs.org/)
- [Twitter Bootstrap](http://getbootstrap.com/)

## Setup

Clone this directory and checkout the submodule:

    $ git clone https://github.com/palavatv/palava-portal
    $ cd palava-portal
    $ git submodule init
    $ git submodule update

Make sure you have Ruby installed. Clone this repo and in the directory run:

    $ bundle install

In another tab, start the [PalavaMachine](https://github.com/palavatv/palava-machine).

Start the middleman development server on http://localhost:4567

    $ middleman

You can build a static version of the page using:

    $ middleman build

### Configure using environment variables

You can set the addresses of the rtc and stun server via environment variables. The defaults are a local rtc server 'ws:localhost:4233' and the palava stun server 'stun:stun.palava.tv'. Use `ws:` for unsecured and `wss:` for ssl secured websocket connections.

    $ export PALAVA_RTC_ADDRESS="ws:some_ip[:some_port]"
    $ export PALAVA_STUN_ADDRESS="stun:some_ip[:some_port]"
    $ export PALAVA_BASE_ADDRESS="https://your.domain.com"
    $ middleman

## Credits

MIT License. Part of the [palava project](https://palava.tv).

Copyright (C) 2013 Jan Lelis       jan@signaling.io
Copyright (C) 2013 Marius Melzer   marius@signaling.io
Copyright (C) 2013 Stephan Thamm   thammi@chaossource.net
Copyright (C) 2013 Kilian Ulbrich  kilian@innovailable.eu
