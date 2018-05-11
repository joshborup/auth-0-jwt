const express = require('express');
const bodyPaser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const app = express();

require('dotenv').config();
app.use(bodyPaser.json());

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
}));

app.post('/api/login', (req, res) => {
    console.log(req.body);
    req.session.user = req.body;
    res.status(200).send(req.session.user)
})

app.get('/api/user_data', (req, res) => {
    console.log('hit');
  res.status(200).send(req.session.user)
})

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.send();
});

const SERVER_PORT = process.env.SERVER_PORT || 4500;

app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});
