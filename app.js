const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req,res) {
  res.send('Hello World!');
})

app.listen(PORT, function() {
  console.log('App running on port ', PORT);
})