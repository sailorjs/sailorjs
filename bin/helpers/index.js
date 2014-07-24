/**
 * Dependencies
 */
var fs     = require('fs');
var path   = require('path');
var util   = require('util');
var yaml   = require('js-yaml');
var _      = require('lodash');



/**
 * Load a YML file
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
var loadYML = function(route){
  var filename = path.join(__dirname, route);
  var contents = fs.readFileSync(filename, "utf8");
  var file = yaml.load(contents);
  return file;
};


/**
 * Load sailor environment file setting in sailor.yml
 * @return {[type]} [description]
 */
var loadEnvironment = function(){
  var config = loadYML('../../sailor.yml');
  var file   = loadYML('../../environment/' + config.environment + '.yml');
  return file;
};



/**
 * Exports
 */
module.exports = {
  loadYML : loadYML,
  loadEnv : loadEnvironment
};
