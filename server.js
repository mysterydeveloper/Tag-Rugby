const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'build')));

var Datastore = require('nedb'), db = new Datastore({ filename: 'db/dbfile', autoload: true });
// db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
//     console.log(newDocs);
// });
app.get('/app', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('/api/read', (req, res) => {
  db.find({ a: 5 }, function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.get('/api/create', (req, res) => {
  db.insert({ a: 5 }, function (err, newDocs) {
    console.log(newDocs);
    res.json(newDocs);
  });
});

app.get('/api/update', (req, res) => {
	db.update({  _id: '2JnhP9SgdVP7hHr6' }, { $set: { "data.satellites": 2, "data.red": true } }, {}, function (err, docs) {
			console.log(docs);
			res.json(docs);
	});
});

app.get('/api/delete', (req, res) => {
	db.remove({ a: 5 }, function (err, numRemoved) {
		console.log(numRemoved);
		res.json(numRemoved);
	});
});

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});