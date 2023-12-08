const { error } = require('console');
const express = require('express');
const fs = require('fs');
const uuid = require('uuid');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello');
});

// -----------------html-----------------------------

app.get('/html', (req, res) => {
  fs.readFile('./public/q1.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(400).json({ message: 'Error while reading data' });
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

// ----------------------------JSON---------------------------------
app.get('/json', (req, res) => {
  fs.readFile('./public/q2.json', 'utf-8', (err, data) => {
    if (err) {
      res
        .status(400)
        .json({ message: 'Error while reading Json File', error: err });
    } else {
      res.status(200);
      res.json(data);
    }
  });
});

// ------------------------------UUID-----------------------------------------
app.get('/uuid', (req, res) => {
  const newId = uuid.v4();
  res.send({ uuid: newId });
});

// ---------------------------Status Code -------------------------------------

app.get('/status/:statusCode', (req, res) => {
  const statusCode = req.params.statusCode;
  if (parseInt(statusCode) >= 100 && statusCode < 599) {
    res.status(200);
    res.send(statusCode);
  } else {
    res.status(400).json({ Error: 'invalid status code' });
  }
});

// ----------------------------delay Time ------------------------------------

app.get('/delay/:time', (req, res) => {
  const time = req.params.time;

  setTimeout(() => {
    res.status(200);
    res.send(`Message after ${time} seconds`);
  }, time * 1000);
});

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} in server!`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
});

app.use((error, req, res, next) => {
  error.status = error.status || 'error';
  error.statusCode = error.statusCode || 500;

  res.status(error.statusCode).json({
    status: error.status,
    statusCode: error.statusCode,
    message: error.message,
  });
});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
