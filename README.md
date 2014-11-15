<center>![](http://i.imgur.com/dslYdiw.png)</center>

# Sailor

[![Build Status](http://img.shields.io/travis/sailorjs/sails/master.svg?style=flat)](https://travis-ci.org/sailorjs/sails)
[![Dependency status](http://img.shields.io/david/sailorjs/sailorjs.svg?style=flat)](https://david-dm.org/sailorjs/sailorjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/sailorjs/sailorjs.svg?style=flat)](https://david-dm.org/sailorjs/sailorjs#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/sailorjs.svg?style=flat)](https://www.npmjs.org/package/sailorjs)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Components in the backend

#### [Documentation](https://github.com/sailorjs/sailor-docs) **|** [Changelog](https://github.com/sailorjs/sailorjs/blob/master/CHANGELOG.md) **|** [Modules directory](https://github.com/sailorjs/sailor-docs/blob/master/en/4_annexes/modules_directory.md) **|** [Resources](https://github.com/sailorjs/sailor-docs/blob/master/en/4_annexes/resources.md)

**Sailor** is a [Sails core](https://github.com/balderdashy/sails) fork that support extra features for create a custom backend based in modularize your code:

![](http://i.imgur.com/6AeMpYc.png)

The most important features are:

+ Packet the common logic of your applications in modules (like μservices) and load as npm package.
+ Better multilanguage experience, clean error messages and definitely ready for use the responses in your frontend.
+ Improve the way to serve assets, in special ready for production mode. Clustering and deployment by [PM2](https://github.com/Unitech/PM2).
+ Handlebars as default template engine, with completely support for different layouts, partials and helpers.

Use specially **Sailor** if you want to:

+ Focused on API backend and connect later with your frontend (Angular, Backbone, Ember, Atoms,..)
+ Have a frontend App client and use the server for API or some static pages (as landing page).
+ Reuse components and/or third API's and improve the timing of your projects.

For connect your backend and your frontend we recommended use [Parrot](https://github.com/sailorjs/parrotjs).


## Install

```
npm instal sailorjs -g
```

and later:

```
$ sailor
```

## License

MIT © sailorjs

