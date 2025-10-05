const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Remove trailing slash
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Strip .html if present
  if (pathname.endsWith('.html')) {
    pathname = pathname.replace('.html', '');
  }

  // Handle root as index.html
  if (pathname === '') {
    pathname = '/index.html';
  } else {
    pathname = pathname + '.html';
  }

  // Serve file from project root
  let filePath = path.join(__dirname, pathname);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not Found');
        } else {
          const ext = path.extname(filePath);
          res.writeHead(200, { 'Content-Type': ext === '.html' ? 'text/html' : 'text/plain' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });
});

server.listen(5501, () => console.log('Server running on http://127.0.0.1:5501'));