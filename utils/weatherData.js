const request = require('request');
const constants = {
	openWeatherMap: {
		BASE_URL: 'https://api.openweathermap.org/data/2.5/weather?q=',
		SECRET_KEY: '3709f89e826c2838310e77a773533f2d'
	}
};

const weatherData = (address, callback) => {
	const url =
		constants.openWeatherMap.BASE_URL +
		encodeURIComponent(address) +
		'&appid=' +
		constants.openWeatherMap.SECRET_KEY;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Can't fetch data from open weather map api ", undefined);
		} else if (!body.main || !body.main.temp || !body.name || !body.weather) {
			callback('Unable to find required data, try another location', undefined);
		} else {
			callback(undefined, {
				temperature: body.main.temp,
				description: body.weather[0].description,
				cityName: body.name
			});
		}
	});
};

module.exports = weatherData;
