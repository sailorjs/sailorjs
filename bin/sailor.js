#!/usr/bin/env node

/**
 * Dependencies
 */
var pkg            = require('../package.json');
var script         = require('sailor-scripts');
var parser         = require('nomnom')(pkg);
var chalk          = require('chalk');
var jwt            = require('jwt-simple');

/**
 * Initialize
 */
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

  script.lift(process.cwd(), opts);
});



/**
 * Create a new token
 */
 parser.command('token')
 .options({
  algorithm: {
    abbr: 'a',
    default: 'HS256',
    help: 'Supported algorithms: HS256, HS384, HS512 and RS256.'
  },
  secret: {
    abbr: 's',
    help: 'Salt for generate the token'
  }
})
 .help("Generate a token for Sailor Proyect")
 .callback(function(options){

  if (options[1] === undefined ) parser.message("need a payload to generate a token.", 1);
  if (options.secret === undefined) parser.message("need a secret to generate a token.", 1);

  var payload = options[1];
  var token = jwt.encode(payload, options.secret);

  parser.message("Token generated with " +
                 "algorithm " + chalk.underline(options.algorithm) +
                 ", secret " + chalk.underline(options.secret) +
                 " and payload " + chalk.underline(payload) +
                 " is: \n" + token);

  // var payload = { foo: 'bar' };
  // var secret = 'xxx';

  // // encode


  // // decode
  // var decoded = jwt.decode(token, secret);
  // console.log(decoded); //=> { foo: 'bar' }
});

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
        parser.message("Module '" + chalk.cyan(name[2]) + "' created! ", 0);
      });
    }
    return;
  }

  if(name[1]===undefined){
    parser.message("need a name for a new proyect.", 1);
  } else {
    script.newBase(name[1], function(){
      parser.message("Proyect '" + chalk.cyan(name[1]) + "' created! ", 0);
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
