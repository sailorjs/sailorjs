# Sailor

[![Build Status](http://img.shields.io/travis/sailorjs/sails/master.svg?style=flat)](https://travis-ci.org/sailorjs/sails)
[![Dependency status](http://img.shields.io/david/sailorjs/sailorjs.svg?style=flat)](https://david-dm.org/sailorjs/sailorjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/sailorjs/sailorjs.svg?style=flat)](https://david-dm.org/sailorjs/sailorjs#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/sailorjs.svg?style=flat)](https://www.npmjs.org/package/sailorjs)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Components in the backend

<center>[![](http://i.imgur.com/8ejNwbK.png)](https://speakerdeck.com/kikobeats/sailor-components-in-the-backend)</center>

**Sailor** is a [Sails core](https://github.com/balderdashy/sails) modification that support extra features for create a custom backend based in modularize your code:

- Packet the common logic of your applications in modules (like μservices) and load as npm package.
- Improve Multilanguage experience, clean error message and in definitely ready for use in your frontend.
- Support server reload, clustering and deploy by [PM2](https://github.com/Unitech/PM2).

Use specially **Sailor** if you want to:

- Focus your backend in API creation.
- Have your frontend logic separate of your backend
- Fast development for Applications and reusable code.


## Install

```
npm instal sailorjs -g
```


## Content

This package content the CLI and is a facade for load others packets necessary for builds module and reduce the dependency, like:

- [sailor-translate](https://github.com/sailorjs/sailor-translate)
- [sailor-validator](https://github.com/sailorjs/sailor-validator)
- [sailor-errorify](https://github.com/sailorjs/sailor-errorify)
- [sailor-scripts](https://github.com/sailorjs/sailor-scripts)

### Frontend

- [sailor-client](https://github.com/sailorjs/sailor-client)

### Modules available

- [sailor-module-user](https://github.com/sailorjs/sailor-module-user)
- [sailor-module-lastfm](https://github.com/sailorjs/sailor-module-lastfm)

## License

MIT © [Kiko Beats](http://www.kikobeats.com)

