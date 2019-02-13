const request = require("request");

var getWeather = (lat, long, callback) => {
	request({
	url: `https://api.darksky.net/forecast/#your-darksky-api/${lat},${long}`,
	JSON: true
}, (error, response, body) => {
	if(!error && response.statusCode === 200){
		var obj = JSON.parse(body);
		callback(undefined, {
			temperature: obj.currently.temperature,
			apparenttemperature: obj.currently.apparentTemperature
		});
	}else {
		callback("unable to fetch weather", undefined);
	}

});
}

module.exports.getWeather = getWeather;