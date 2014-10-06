module.exports = {
  capitalize: function(str){
    return str[0].toUpperCase() + str.substring(1);
  },
  sortKeys: require('sort-keys')
};
