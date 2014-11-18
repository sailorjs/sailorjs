## 0.4.6

* Use `handlebars` as default template engine, with full support for helpers and different layouts or partials.
* In Sails is mandatory install and run `grunt` locally before lift the server. Grunt hook is optionally here.

## 0.4.5

* Added support for [conditional database schema](https://github.com/balderdashy/sails/pull/2083#issuecomment-58672471).
* Added new command `install` for install modules in base projects.
* Added helpers in `validator`, `errorify` and `sailor-scripts`.
* Fixed bug in [sails](https://github.com/sailorjs/sails/commit/55c8ef4906d5a7b785b1a2d06afbfa4618e54cc4) for load `findOne` blueprint from `sailor-module-blueprints`.
* Improve CLI options commands.
* Automatically use `www` folder if is available instead of `.tmp/public`.

## 0.4.4

* Added `sort-keys` as dependency in `util`.
* Improve testing scaffold from `sailor-scripts` with more functions for make easy the setup.
* Added functions for handlers errors related with modules. Check in [lib/hooks/modules](https://github.com/sailorjs/sails/commit/7f6d863f39c65694960caa689d4c1aa7fc90b92b).
* Added the most common status code shorcuts in [sailor-module-response](https://github.com/sailorjs/sailor-module-response/commit/6bbc1e94299f0de0a3b1c78b723cc33af079c02f) and updated [sailor-module-blueprints](https://github.com/sailorjs/sailor-module-blueprints/commit/a5f1d673b3ded9ec82320a7072ea7f1bf9941779).

## 0.4.3

* Divided the default scaffold in basic modules: *i18n*, *response*, *blueprints*, *validator*.
* Optimized testing setup for use make the build more fast.

