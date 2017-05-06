# palava.tv

palava.tv is simplistic video communication with your friends and colleagues from within your web browser. No registration or browser plugin required.

# palava.tv | Portal

The palava portal is the single-page web application which runs [palava.tv](https://palava.tv). It is built using the following technologies:

- [palava-client](https://github.com/palavatv/palava-client)
- [React](https://facebook.github.io/react/)
- [Middleman](http://middlemanapp.com/)
- [Twitter Bootstrap](http://getbootstrap.com/)

### Setup

Clone this directory and checkout the submodule:

    $ git clone https://github.com/palavatv/palava-portal
    $ cd palava-portal
    $ git submodule init
    $ git submodule update

Make sure you have Ruby and Bundler installed, maybe you also need to export the PATH manually

    $ ruby -v

After cloning this repo and in the new directory run:

    $ bundle install

Make also sure that you also have install nodejs and run:

    $ npm install

In another tab, start the [PalavaMachine](https://github.com/palavatv/palava-machine) or [SignalTower](https://github.com/farao/signaltower/)

Start the middleman development server on http://localhost:4567

    $ middleman

In case '$ middleman' leads to errors due to some missing components, try running '$ bundle update' and then re-run middleman.

You can build a static version of the page using:

    $ middleman build

#### Configure using Environment Variables

You can set the addresses of the rtc and stun server via environment variables. The defaults are a local rtc server 'ws:localhost:4233' and the palava stun server 'stun:stun.palava.tv'. Use `ws:` for unsecured and `wss:` for ssl secured websocket connections.

    $ export PALAVA_RTC_ADDRESS="ws:some_ip:some_port"
    $ export PALAVA_STUN_ADDRESS="stun:some_ip:some_port"
    $ export PALAVA_BASE_ADDRESS="https://your.domain.com"
    $ middleman

## Issues

Please report issues to the [palava main repository](https://github.com/palavatv/palava/issues).

## Credits

MIT License. Part of the [palava project](https://palava.tv).

    Copyright (C) 2013 Jan Lelis          mail@janlelis.de
    Copyright (C) 2013 Marius Melzer      marius@rasumi.net
    Copyright (C) 2013 Stephan Thamm      thammi@chaossource.net
    Copyright (C) 2013 Kilian Ulbrich     kilian@innovailable.eu
    Copyright (C) 2014-2017 palava e. V.  contact@palava.tv