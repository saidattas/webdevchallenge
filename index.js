var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const weatherData = require('./utils/weatherData');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/weatherdetails', (req, res) => {
	res.render('weather');
});

app.get('/weather', function(req, res) {
	const address = req.query.address;
	if (!address) {
		return res.send({
			error: 'You must enter address in search text box'
		});
	}

	weatherData(address, (error, { temperature, description, cityName } = {}) => {
		if (error) {
			return res.send({
				error
			});
		}
		// console.log(temperature, description, cityName);
		res.send({
			temperature,
			description,
			cityName
		});
	});
	// res.render('weather');
});

app.get('/email', function(req, res) {
	res.render('registeremail');
});
app.get('/e-mail', function(req, res) {
	res.render('e-mail');
});
app.get('/musicplayer', function(req, res) {
	res.render('musicplayer');
	// res.sendFile(path.join(__dirname + '/musicplayer.html'));
});
app.listen(3000, () => {
	console.log('SERVER IS RUNNING ON PORT 3000!');
});
