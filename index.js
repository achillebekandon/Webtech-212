// ./index.js

console.log("Hello Node.js!");


// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

// Import du module http
const http = require('http')

// Import du module handles.js
const handles = require('./handles')

// Création et démarrage du serveur sur le port 8080
http
  .createServer(handles.serverHandle)
  .listen(8080, () => {
    console.log('Serveur démarré sur http://localhost:8080')
  })


// ./index.js
const http = require('http')
const handles = require('./handles')

http
.createServer(handles.serverHandle)
.listen(8080)