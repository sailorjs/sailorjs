/**
 * Dependencies
 */
var path = require('path');

/**
 * Exports
 */
module.exports = {
  isSailorProyect: function(appPath){
    try {
      var pkg = _getPackagePath(appPath);
      return Boolean(pkg.dependencies['sailorjs']);
    } catch (err) {
      return false;
    }
  },
  isAlreadyInstalled: function(appPath, moduleName){
    var pkg = _getPackagePath(appPath);
    return Boolean(pkg.dependencies[moduleName]);
  }
};

/**
 * Private
 */
var _getPackagePath = function(appPath){
  var projectPath;
  if (appPath === undefined) projectPath = path.resolve('package.json');
  else projectPath = path.resolve(appPath, 'package.json');
  return require(projectPath);
};
