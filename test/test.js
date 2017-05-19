var assert = require('assert');
var fs;

require.ensure(['fs'], function (req) {
  fs = req('fs');
});

assert(fs);

var req = require.context('./context', false, /\.js$/);

assert(req);

var keys = req.keys();

assert(keys.length === 2);

keys.forEach(function(key) {
  var item = req(key);
  assert(item.value === 42);
});