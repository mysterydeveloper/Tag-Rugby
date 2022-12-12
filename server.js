const express = require('express');
const path = require('path');
const read = require('./src/Read')
const create = require('./src/Create')
const update = require('./src/Update')
const Delete = require('./src/Delete')
const runQuery = require('./src/runQuery')

const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, 'ui')));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.postUser,
  host: process.env.postHost,
  database: process.env.postDatabase,
  password: process.env.postPassword,
  port: process.env.postPort,
  ssl: true
})


app.post('/api/read', (req, res) => {
    runQuery.run(read.get(req.body), res, pool)
});

app.post('/api/create', (req, res) => {
    runQuery.run(create.get(req.body), res, pool);
});

app.post('/api/update', (req, res) => {
    runQuery.run(update.get(req.body), res, pool)
});

app.post('/api/delete', (req, res) => {
    runQuery.run(Delete.get(req.body), res, pool)
});

app.post('/api/login', (req, res) => {
  if (req.body.login == "adminToken123") {
    res.send({
      login: true
    })
  } else {
    res.send({
      login: false
    })
  }
});

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
