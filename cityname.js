var common = require('./common.js')
function get_current_weather(cityname, unit, callback) {

 	var uri = 'http://api.openweathermap.org/data/2.5/weather'
	var api_key ='355e806e0c6b3aa9c5c24c36144d073b'
	var units = common.getUnit(unit)
	var url = uri + '?q=' + cityname +'&APPID=' + api_key + units
	console.log(url)
	var request = require('request');
	request(url, function (error, response, body) {

  	if(error)
  	{
    	console.log('error:', error);
	} 
	else if (response.statusCode == 400) 
	{
		console.log('invalid city name');
		return callback("invalid city name")
	}
	else if (response.statusCode == 404) 
	{
		console.log('city not found');
		return callback("city not found")
	}
	else if (response.statusCode == 200) 
	{
	    //console.log(body);
	    var jsonBody = JSON.parse(body);
	    //console.log(jsonBody);
	    var jsonCustom = new Object();
	    jsonCustom.latitude = jsonBody.coord.lat
	    jsonCustom.longitude = jsonBody.coord.lon
	    jsonCustom.current_conditions = jsonBody.weather[0].description
	    jsonCustom.current_temp = jsonBody.main.temp
	    jsonCustom.high_temp = jsonBody.main.temp_max
	    jsonCustom.low_temp = jsonBody.main.temp_min
	    jsonCustom.requested_unit = unit
	    console.log(jsonCustom);
	    var current_weather = JSON.stringify(jsonCustom)
	    return callback(current_weather)
	}
});

}

module.exports = { get_current_weather }