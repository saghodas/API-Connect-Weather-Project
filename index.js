<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Current weather conditions</title>
</head>
<body>
	<fieldset>
	<label> Find Current weather conditions!</label>
	<form action="/" method="post">
		<input type="radio" name="zonetype" value="cityname" required > City name
		<input type="radio" name="zonetype" value="zipcode" required > Zip Code
		<input type="text" name="zonename" required="true" />
		<select name="unit">
			<option value=kelvin>Kelvin </option>
			<option value=celsius>Celsius </option>
			<option value=fahrenheit>Fahrenheit </option>	
		</select> 
		<input type="submit" name="get current weather" value="Find Current Weather Conditions" />
	</form>
    </fieldset>
</body>
</html>