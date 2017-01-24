var express = require('express');
var app = express();
var useragent = require('useragent');

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  var ip = req.ip.replace(/^.*:/, '');
  var lg = req.acceptsLanguages()[0];
  var agent = useragent.parse(req.headers['user-agent']);
  var os = agent.os.toString();
  res.json({'ipaddress': ip, 'language': lg, 'software': os})
})

app.listen(port);
