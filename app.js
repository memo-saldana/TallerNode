const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const users = [
  {
    name: "Memo",
    phone: 1234567
  }
]


app.use(bodyParser.json());

app.post('/', function(req, res) {
  console.log('req.body :', req.body);
  res.send('Hello World!');
})

app.get('/users', function(req, res) {
  res.json(users);
})

app.post('/users', function(req, res) {
  const user = req.body;

  users.push(user);

  console.log(users);
  res.status(201).json({message:"User uploaded!"});
})


app.get('/users/:id', function(req, res) {
  const id = req.params.id
  if(id >= 0 && id < users.length) {
    return res.json(users[id]);
  } else {
    return res.status(500).send('SERVER ERROR');
  }
})


app.delete('/users/:id', function(req, res) {
  const id = req.params.id
  if(id >= 0 && id < users.length) {
    res.json(users[id]);
    users.splice(id,1);
  } else {
    return res.status(500).send('SERVER ERROR');
  }
})


app.listen(PORT, function() {
  console.log('App running on port ', PORT);
})