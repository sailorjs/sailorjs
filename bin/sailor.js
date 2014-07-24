#!/usr/bin/env node

/**
 * Dependencies
 */
var script = require("sailor-scripts");
var parser = require("nomnom")(require('../package.json'));


/**
 * Initialize
 */
parser.script("sailor");


/**
 * version
 */
parser.option('version', {
   abbr: 'v',
   flag: true,
   help: "Output the version of the CLI"
})

/**
 * lift command
 */
 parser.command('lift')
    .callback(function() {
       script.lift(process.cwd());
    })
    .help("Start with a Sailor Proyect");

/**
 * new command
 */
parser.command('new')
   .callback(function() {
      console.log('new!');
   })
   .help("Created a new Sailor Proyect")

/**
 * new module command
 */
parser.command('new module')
   .callback(function() {
      console.log('new module!');
   })
   .help("Created a new module for Sailor");


/**
 * Parse!
 */
parser.parse();
