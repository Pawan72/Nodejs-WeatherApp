const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const yargs = require('yargs');



const argv = yargs
 .options({
	a:{
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
	if(errorMessage){
		console.log(errorMessage);
	}else {
		console.log(JSON.stringify(result, undefined, 5));
	}

	var lat = result.latitude;
	var long = result.longitude;

	weather.getWeather(lat, long, (errorMessage, result) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
	console.log(JSON.stringify(result, undefined, 5));	//console.log(`The temperature at ${argv.address} is: ${JSON.parse(result)}`);
	}
})
});	

// var lat = argv.address.latitude;
// var long = argv.address.longitude;


	

