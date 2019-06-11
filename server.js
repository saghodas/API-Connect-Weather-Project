var http = require('http'); 
//var url = require('url');
// request = require('request');
const qs = require('querystring');
var fs = require('fs');
var index = fs.readFileSync('index.js');
var zip = require('./zipcode.js')
var city = require('./cityname.js')

//create a server object:
http.createServer(function (request, response) {
	if (request.method == 'GET')
			response.end(index)

	else if (request.method == 'POST')
	{
		var current_weather ="Something went wrong .. Try again!"
		response.writeHead(200, {'Content-Type': 'text/html'});
	  	var postdata = '';
		
		request.on('data', function(chunk) {
			console.log("chunk: " + chunk)
            postdata += chunk;       
            
        });
        request.on('end', function() {
            var post = qs.parse(postdata);
            var zonetype = post.zonetype
            var zonename = post.zonename
	  		var unit = post.unit
            console.log("zonetype: " + zonetype + "\nzonename: " + zonename + "\nunit: " + unit)
            
            if ( zonetype == "cityname" )
            {
	  			console.log("query by cityname")
	  			city.get_current_weather(zonename, unit, callback)
            }
	  		else if (zonetype == "zipcode")
	  		{
	  			console.log("query by zipcode")
            	zip.get_current_weather(zonename, unit, callback)
	  		}
	  		
        });
        function callback(message) {
        	//response.writeHead(200, {'Content-Type': 'text/html'});
        	response.set('Content-Type', 'text/html')
        	response.end(message);
    	}
    }

}).listen(8080); //the server object listens on port 8080 
