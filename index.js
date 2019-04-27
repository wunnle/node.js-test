var express = require('express');
var app = express();
var wiki = require('./wiki')


app.use('/public', express.static('public'))

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.use('/wiki', wiki)

app.use(express.static('public'));


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});