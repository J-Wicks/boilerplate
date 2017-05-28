const express = require('express')
const app = express()
const path = require ('path')
const morgan = require('morgan')
const bodyParser = require ('body-parser')
const db = require ('./database')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

db.sync({force: true})
.then(() => {
	app.listen(3000, function () {

  	console.log("listening on port 3000");
});
})


app.use('/', express.static( __dirname + '/public'))

app.use('/api', require('./server/apiRoutes'))

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname,'/index.html'))
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app