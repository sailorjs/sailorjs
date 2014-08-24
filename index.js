/**
 * Dependencies
 */
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
  translate : require('sailor-translate'),
  capitalize : capitalize
};
