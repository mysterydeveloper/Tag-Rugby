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

var Datastore = require('nedb'), db = new Datastore({ filename: 'db/dbfile', autoload: true });
// db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
//     console.log(newDocs);
// });

app.post('/api/read', (req, res) => {
	console.log(req.body)

  db.find(req.body, function (err, docs) {
    res.json(docs);
  });
});

app.post('/api/create', (req, res) => {
	console.log(req.body)
  db.insert(req.body, function (err, newDocs) {
    res.json(newDocs);
  });
});

app.post('/api/update', (req, res) => {
	console.log(req.body)
	db.update({_id:req.body["_id"]},req.body, {}, function (err, docs) {
			console.log(docs);
			res.json(docs);
	});
});

app.post('/api/delete', (req, res) => {
	db.remove(req.body, {multi: true}, function (err, numRemoved) {
		console.log(numRemoved);
		res.json(numRemoved);
	});
});

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});