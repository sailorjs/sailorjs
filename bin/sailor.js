#!/usr/bin/env node

/**
 * Dependencies
 */
var updateNotifier = require('./util/notifier');
var npm            = require('./util/npm');
var pkg            = require('../package.json');
var scripts        = require('sailor-scripts');
var parser         = require('nomnom')(pkg);
var chalk          = require('chalk');

/**
 * Initialize
 */
 updateNotifier();
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
* install command
*/
 parser.command('install')
 .options({
   save: {
     flag: true,
     help: "Save the module in your package.json"
   },
 })
 .help("Install a dependency in the base of your project")
 .callback(function(input) {
  if(!npm.isSailorProyect(process.cwd()))
    parser.message.error("First create a new base project.", 1);

  if(npm.isAlreadyInstalled(process.cwd(), input[1]))
    parser.message.error("Module '" + input[1] + "' is already installed.", 1);

  var command = 'npm install ' + input[1];
  if (input.save) command += ' --save';

  scripts.run(command);
  scripts.writeModuleFile(input[1], process.cwd());
  parser.message.info("Module '" + chalk.cyan(input[1]) + "' installed.");
});

/**
 * lift command
 */
 parser.command('lift')
 .options({
   silly: {
     flag: true,
     help: "Activate silly level in logs"
   },
   production: {
     flag: true,
     help: "Activate production environment"
   }
 })
 .help("Start with a Sailor Proyect")
 .callback(function(action) {
  var opts = {};

  if (action.silly){
    opts.logs = {
      level: 'silly'
    };
  }
  if (action.production)
    opts.environment = 'production';

  scripts.lift(process.cwd(), opts);
});


/**
 * new command
 */
 parser.command('new')
 .options({
   organization: {
     abbr: 'org',
     default: 'sailorjs',
     help: "Link your Github organization with the project"
   },
   repository: {
     abbr: 'rep',
     help: "Link your Github repository with the project"
   },
   description: {
     abbr: 'desc',
     help: "Added description for your project"
   }
 })
 .callback(function(input) {

  if (input[1]==='module'){
    if(input[2]===undefined){
      parser.message.error("Need a name for a new module.", 1);
    } else {

      options = {
        name        : input[2],
        organization: input.organization,
        repository  : input.repository || input[2],
        description : input.description || "A new module for Sailor"
      };

      scripts.newModule(options, function(){
        parser.message.info("Module '" + chalk.cyan(input[2]) + "' created.", "");
      });
    }
    return;
  }

  if(input[1]===undefined){
    parser.message.error("Need a name for a new proyect.", 1);
  } else {

    options = {
      name        : input[1],
      organization: input.organization,
      repository  : input.repository || input[1],
      description : input.description || "A new Sailor Proyect"
    };

    scripts.newBase(options, function(){
      parser.message.info("Proyect '" + chalk.cyan(input[1]) + "' created.", "");
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
