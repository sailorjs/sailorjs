/**
 * Module dependencies
 */

var _       = require('lodash');
var program = require('commander');


var sailor_logo =
  '              ' + '\t.---------------------------------------.  ' + '\n' +
  '       |\\    ' + '\t|            Sailor v0.1.0              |  ' + '\n' +
  '        \\\\  ' + '\t|                                       |  ' + '\n' +
  '   .-"""-||   ' + '\t|       Plugin system for Sails         |  ' + '\n' +
  '  / _\\__ ||  ' + '\t|      https://github.com/sailorjs      |  ' + '\n' +
  '  |/____`||   ' + '\t\'---------------------------------------\'' + '\n' +
  '  ((__,__)|   ' + '() ' + '\n' +
  '   |  __.\'/  ' + 'º' + '\n' +
  '   \'.(_).\'\'';

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
