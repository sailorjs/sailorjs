/**
 * Module dependencies
 */

var _       = require('lodash');
var program = require('commander');
var pkg     = require('../package.json');
var chalk   = require('chalk');


var sailor_logo =
  chalk.cyan('              ' + '\t.---------------------------------------.  '           +  '\n')+
  chalk.cyan('       |\\    ' + '\t|             Sailor v'+pkg.version+'             |  ' + '\n' )+
  chalk.cyan('        \\\\  ' + '\t|                                       |  '           + '\n' )+
  chalk.cyan('   .-"""-||   ' + '\t|       '+pkg.description+'         |  '           + '\n' )+
  chalk.cyan('  / _\\__ ||  ' + '\t|      https://github.com/sailorjs      |  '           + '\n' )+
  chalk.cyan('  |/____`||   ' + '\t\'---------------------------------------\''           + '\n' )+
  chalk.cyan('  ((__,__)|   ' + '() '                                                     + '\n' )+
  chalk.cyan('   |  __.\'/  ' + 'º'                                                       + '\n' )+
  chalk.cyan('   \'.(_).\'\''                                                                    );

//
//
// Monkey-patch commander
//
//

// Allow us to display help(), but omit the wildcard (*) command.
program.Command.prototype.usageMinusWildcard =
  program.usageMinusWildcard = function() {
    program.commands = _.reject(program.commands, {
      _name: '*'
    });
    program.help();
};

// Force commander to display version information.
program.Command.prototype.versionInformation =
  program.versionInformation =
  function() {
    program.emit('version');
};

program.Command.prototype.helpInformation = function(){
  return [

    sailor_logo,
      ''
    , '  Usage: ' + this._name
        + (this._alias
          ? '|' + this._alias
          : '')
        + ' ' + this.usage()
    , '' + this.commandHelp()
    , '  Options:'
    , ''
    , '' + this.optionHelp().replace(/^/gm, '    ')
    , ''
    , ''
  ].join('\n');
};


module.exports = program;
