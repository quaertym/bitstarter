var sys = require('util');
var rest = require('restler');

rest.get('http://google.com').on('complete',function(result) {
    sys.puts(result);
});
