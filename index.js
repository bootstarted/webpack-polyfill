var Module = require("module");

var f = function(_, r, m, __filename, __dirname) {
  var __non_webpack_require__ = r;
  r.resolveWeak = function(x) {
    return x;
  };
  r.ensure = function(_, fn) {
    fn(r);
  };
  r.context = function(search, recurse, regexp) {
    var klaw = r('klaw-sync');
    var path = r('path');
    var dir = path.resolve(__dirname, search);
    var keys = function() { 
      return klaw(dir, {
        nodir: true,
        noRecurseOnFailedFilter: true,
        filter: function(obj) {
          return (recurse || !obj.stats.isDirectory()) && regexp.test(obj.path);
        }
      }).map(function(obj) {
        return './' + obj.path.substr(dir.length + 1);
      }); 
    };
    var res = function(f) { return r(path.join(dir, f)); };
    res.keys = keys;
    return res;
  };
  var q = __WRAPPED__;
  q.apply(this, arguments);
}

var oldWrap = Module.wrap;
var body = '(' + f.toString() + ')';

Module.wrap = function webpackPolyfill(content) {
  return body.replace(/__WRAPPED__/, oldWrap(content));
};
