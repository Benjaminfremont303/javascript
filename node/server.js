const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;

  
  if (req.method === 'GET' && req.url === '/form') {
    // Lecture du fichier HTML contenant le formulaire
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Erreur interne du serveur');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && path === '/submit-form') {
    // Gestion de la soumission du formulaire POST
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = querystring.parse(body);
      const name = formData.name;
      const email = formData.email;

      // Traitez les données soumises comme requis
      // ...

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Formulaire soumis avec succès');
    });
  } else if(req.method === 'GET' && req.url === '/'){
    fs.readFile('index.html', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Erreur interne du serveur');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }});

  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page non trouvée');
  }
});

server.listen(3000, () => {
  console.log('Serveur en cours d\'écoute sur le port 3000');
});