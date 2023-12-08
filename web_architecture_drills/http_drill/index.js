const http = require('http');
const fs = require('fs');
const crypto = require('crypto');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/html':
      fs.readFile('./a.html', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, 'content/html');
          res.end(data);
        }
      });
      break;

    case '/json':
      fs.readFile('./user.json', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200);
          res.end(data);
        }
      });
      break;

    case '/uuid':
      let uuid = crypto.randomUUID();
      res.writeHead(200);
      res.end(uuid);
      break;
  }

  let reqUrl = req.url.split('/');
  console.log(reqUrl);
  if (reqUrl[1] == 'status') {
    try {
      res.writeHead(200);
      res.end(reqUrl[2]);
    } catch (error) {
      res.writeHead(400);
      console.log(error);
      res.end();
    }
  }
  if (reqUrl[1] == 'delay') {
    try {
      setTimeout(() => {
        res.writeHead(200);
        res.end(`Success at ${reqUrl[2]}`);
      }, reqUrl[2]);
    } catch (error) {
      res.writeHead(400);
      console.log(error);
      res.end();
    }
  } else {
    res.end('hello');
  }
});

server.listen(8000, () => console.log(`server listing to port number 8000`));
