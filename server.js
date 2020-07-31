var http = require('http');
var url = require('url');  
var fs = require('fs');

//a web server so that when a browser navigates to "localhost:8080/about" 

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/about.html');
	res.write("About");
	res.end();
  }).listen(8080);