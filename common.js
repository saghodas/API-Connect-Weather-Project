function getUnit(unit)
{
	var units =''
	if (unit =='celsius')
	{
	  	units = '&units=metric'
	}
	else if (unit =='fahrenheit')
	{
	  	units = '&units=imperial'
	}
	return units
}

module.exports = { getUnit }