#!/usr/bin/env node

/**
 * Dependencies
 */
var pkg            = require('../package.json');
var script         = require('sailor-scripts');
var parser         = require('nomnom')(pkg);
var updateNotifier = require('update-notifier');
var chalk          = require('chalk');

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
   .callback(function(name) {

    if (name[1]==='module'){
      if(name[2]===undefined){
        console.log(chalk.red("error") + ": need a name for a new module.")
      } else {
        script.newModule(name[2], function(){
          console.log("Module '" + chalk.cyan(name[2]) + "' created! ")
        });
      }
      return;
    }

    if(name[1]===undefined){
      console.log(chalk.red("error") + ": need a name for a new proyect.")
    } else {
      script.newBase(name[1], function(){
        console.log("Proyect '" + chalk.cyan(name[1]) + "' created! ")
      });
    }

   })
   .help("Created a new Sailor Proyect")

/**
 * new module command
 */
parser.command('new module')
   .help("Created a new module for Sailor");


/**
 * Parse!
 */
parser.parse();
