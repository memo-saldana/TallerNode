const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());

app.post('/', function(req,res) {
  console.log('req.body :', req.body);
  res.send('Hello World!');
})

app.listen(PORT, function() {
  console.log('App running on port ', PORT);
})