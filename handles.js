// ./handles.js

// Import des modules nécessaires
const url = require('url')
const qs = require('querystring')

// Fonction qui gère toutes les requêtes HTTP
const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'})

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params['name'])
  } else {
    res.write('Hello anonymous')
  }

  res.end()
}

// Export de la fonction pour l’utiliser dans index.js
module.exports = {
  serverHandle
}
