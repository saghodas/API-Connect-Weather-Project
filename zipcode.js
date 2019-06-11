function get_current_weather(zipcode, unit, callback) {

 	var uri = 'http://api.openweathermap.org/data/2.5/weather'
	var api_key ='355e806e0c6b3aa9c5c24c36144d073b'
	var units =''
	if (unit =='celsius')
	{
	  	units = '&units=metric'
	}
	else if (unit =='&units=fahrenheit')
	{
	  	units = 'imperial'
	}
	  	
	var url = uri + '?zip=' + zipcode +'&APPID=' + api_key + units
	console.log(url)
	const request = require('request');
	request(url, function (error, response, body) {

  	if(error)
  	{
    	console.log('error:', error);
    	return callback("error")
	} 
	else if (response.statusCode == 400) 
	{
		console.log('invalid zip code');
		return callback("invalid zip code")
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
	    jsonCustom.coordinates. = jsonBody.coord
	    jsonCustom.current_conditions = jsonBody.weather[0].description
	    jsonCustom.current_temp = jsonBody.main.temp
	    jsonCustom.high_temp = jsonBody.main.temp_max
	    jsonCustom.low_temp = jsonBody.main.temp_min
	    jsonCustom.requested_unit = unit
	    console.log(jsonCustom);
	    return callback(JSON.stringify(jsonCustom))
	}
});

}

module.exports = { get_current_weather }

