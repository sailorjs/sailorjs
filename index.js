/**
 * Dependencies
 */
var Translator = require('sailor-translate');
var translate = new Translator();

var capitalize = function(str){
  return str[0].toUpperCase() + str.substring(1);
};

/**
 * Exports
 */
module.exports = {
  errorify  : require("sailor-errorify"),
  scripts   : require("sailor-scripts"),
  validator : require("validator"),
  actionUtil: require("sailor-scripts/node_modules/sails/lib/hooks/blueprints/actionUtil"),
  translate : translate,
  capitalize : capitalize
};
