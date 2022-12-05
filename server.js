const express = require('express');
const path = require('path');

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

var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db/dbfile',
    autoload: true
  });

app.post('/api/read', (req, res) => {
  db.find(req.body, function (err, docs) {
    res.json(docs);
  });
});

app.post('/api/create', (req, res) => {
  if (Array.isArray(req.body)) {
    for (let i = 0; i < req.body.length; i++) {
      const element = req.body[i];
      db.insert(element, function (err, newDocs) {
      });
    }
    res.send(true)
  }
  else{
    db.insert(req.body, function (err, newDocs) {
        res.json(newDocs);
    });
    }
});

app.post('/api/update', (req, res) => {
  db.update({
    _id: req.body["_id"]
  }, req.body, {}, function (err, docs) {
    res.json(docs);
  });
});

app.post('/api/delete', (req, res) => {
  db.remove(req.body, {
    multi: true
  }, function (err, numRemoved) {
    res.json(numRemoved);
  });
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
