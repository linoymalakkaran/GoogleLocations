const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
    restApi = require('./locations-route')
	;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.use('/rest', restApi);

app.listen(9000, () => {
	console.log(`App running => http://localhost:9000`);
});
