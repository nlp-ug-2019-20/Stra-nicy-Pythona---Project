// Express App Setup
const express = require('express');
const cors = require('cors');
const path = require('path');
const nodeyourmeme = require('nodeyourmeme');

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.use(express.static(path.join(__dirname,'../frontend')));

app.listen(port, err => {
  console.log(`Backend app listening on port ${port}`);
});

app.get('/', (req, resp) => {
  nodeyourmeme.random().then(console.log).catch(console.error);
  resp.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/about-us', (req, resp) => {
  resp.sendFile(path.join(__dirname, '../frontend/about-us.html'));
});

app.get('/project', (req, resp) => {
  resp.sendFile(path.join(__dirname, '../frontend/project.html'));
});

app.get('/api/random', (req, resp) => {
  nodeyourmeme.random().then(console.log).catch(console.error);
});

app.get('/api/search', (req, resp) => {
  let searchPhrase = req.query.search
  nodeyourmeme.search(searchPhrase).then(console.log).catch(console.error);
});

