//TODO: Make this a vows test

var Client = new require('../../../../lib/pkgcloud/core/base/client').Client;
var helpers = require('../../../helpers');

var client = helpers.createClient('azure2', 'compute');

var options = {};

client.rebootServer('pkgcloud2', function(err, result) {
  if(err) {
    console.log(err);
  } else {
    console.log(ok);
  }
});




