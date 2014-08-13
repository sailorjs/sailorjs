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
 // Checks for available update and returns an instance
 updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
 }).notify();
 // initialize CLI
 parser.script("sailor");

/**
 * version
 */
 parser
 .option('version', {
   abbr: 'v',
   flag: true,
   help: "Output the version of the CLI",
   callback: function() {
    return pkg.name + "@" + pkg.version;
  }
});

/**
 * help
 */
 parser
 .option('help', {
  abbr: 'h',
  flag: true,
  help: "Ouput this information"
});

/**
 * lift command
 */
 parser.command('lift')
 .callback(function(action) {
  if (action.silly){
    var opts = {
      log: {
        level: 'silly'
      }
    };
    script.lift(process.cwd(), opts);
  }
  script.lift(process.cwd());
})
 .options({
  silly: {
    flag: true,
    help: "Actiave silly level in logs"
  }
})
 .help("Start with a Sailor Proyect");

/**
 * new command
 */
 parser.command('new')
 .callback(function(name) {

  if (name[1]==='module'){
    if(name[2]===undefined){
      parser.message("need a name for a new module.", 1);
    } else {
      script.newModule(name[2], function(){
        parser.message("Module '" + chalk.cyan(name[2]) + "' created! ");
      });
    }
    return;
  }

  if(name[1]===undefined){
    parser.message("need a name for a new proyect.", 1);
  } else {
    script.newBase(name[1], function(){
      parser.message("Proyect '" + chalk.cyan(name[1]) + "' created! ");
    });
  }

})
 .help("Created a new Sailor Proyect");

/**
 * new module command
 */
 parser.command('new module')
 .help("Created a new module for Sailor");


/**
 * Parse!
 */
 parser.parse();
