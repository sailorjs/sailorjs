#!/usr/bin/env node

/**
 * Dependencies
 */
var script    = require("sailor-scripts");
var _         = require('lodash');
var program   = require('./_commander');
var pkg       = require('../package.json');
var helper    = require('./helpers');
var NOOP      = function() {};
var config    = helper.loadEnv();


/**
 * $ sailor -v
 * $ sailor -V
 * $ sailor --version
 * $ sailor version
 */
program
  .version(pkg.version, '-v, --version')
  .unknownOption = NOOP;

program.usage('[command]');


// make `-v` option case-insensitive
process.argv = _.map(process.argv, function(arg) {
  return (arg === '-V') ? '-v' : arg;
});


/**
 * $ sailor build
 */
var cmd;
cmd = program.command('build');
cmd.unknownOption = NOOP;
cmd.description('');
cmd.action(function(){
  script.build();
});

/**
 * $ sailor lift
 */
var cmd;
cmd = program.command('lift');
cmd.unknownOption = NOOP;
cmd.description('');
cmd.action(function(){
  script.lift(process.cwd(), config);
});


/**
 * $ sailor
 */
program.parse(process.argv);
var NO_COMMAND_SPECIFIED = program.args.length === 0;
if (NO_COMMAND_SPECIFIED) {
  program.usageMinusWildcard();
}
