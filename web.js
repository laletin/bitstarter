var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
var buffer = new Buffer(50);
//b = fs.readFileSync(index.html);  
//b.toString();
response.send(fs.readFileSync(__dirname+"/index.html").toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
