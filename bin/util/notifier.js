var pkg            = require('../../package.json');
var updateNotifier = require('update-notifier');
var parser         = require('nomnom')(pkg);

module.exports = function() {

  var notifier = updateNotifier({
    packageName         : pkg.name,
    packageVersion      : pkg.version,
    updateCheckInterval : 1000 * 60 * 60 * 1 // 1 hr
  });

  if (notifier.update) {
    notifier.notify(true);
    parser.message.info("Please, update to continue.", " ");
  }
};
