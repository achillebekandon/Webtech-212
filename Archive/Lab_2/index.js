// ./index.js

console.log("Hello Node.js !")

const http = require('http')
const handles = require('./handles')

http
  .createServer(handles.serverHandle)
  .listen(8080, () => {
    console.log('Serveur démarré sur http://localhost:8080')
  })
