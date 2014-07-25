#!/usr/bin/env node

/**
 * Dependencies
 */
var pkg            = require('../package.json');
var script         = require('sailor-scripts');
var parser         = require('nomnom')(pkg);
var updateNotifier = require('update-notifier');
var execSync       = require('exec-sync');
var chalk          = require('chalk');
var multiline      = require('multiline');


var description_new = multiline(function(){/*
Use Yeoman for this:

1) Install yo: npm install -g yo
2) Install the generator: npm install -g generator-sailor
3) Run the generator: yo sailor
*/});

var description_module = multiline(function(){/*
Use Yeoman for this:

1) Install yo: npm install -g yo
2) Install the generator: npm install -g generator-sailor-module
3) Run the generator: yo sailor-module
*/});


/**
 * Initialize
 */
parser.script("sailor");
updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
}).notify();


/**
 * version
 */
parser.option('version', {
   abbr: 'v',
   flag: true,
   help: "Output the version of the CLI",
   callback: function() {
    return pkg.name + "@" + pkg.version;
    }
})

/**
 * help
 */
 parser.option('help', {
    abbr: 'h',
    flag: true,
    help: "Ouput this information"
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
    console.log(chalk.gray(description_new));
   })
   .help("Created a new Sailor Proyect")

/**
 * new module command
 */
parser.command('new module')
   .callback(function() {
      console.log(chalk.gray(description_module));
   })
   .help("Created a new module for Sailor");


/**
 * Parse!
 */
parser.parse();
