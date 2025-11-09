const url = require('url')
const qs = require('querystring')
const fs = require('fs')
const path = require('path')

// Liste de réponses aléatoires pour /hello
const randomResponses = [
  "Salut !",
  "Bonjour !",
  "Hey !",
  "Hello !"
]

const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const pathName = route.pathname
  const params = qs.parse(route.query)

  // ----------------------
  // Route /explique
  // ----------------------
  if (pathName === '/explique') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Page Explique</h1>')
    res.write('<ul>')
    res.write('<li><a href="/hello?name=Guy">/hello?name=Guy</a></li>')
    res.write('<li><a href="/about">/about</a></li>')
    res.write('</ul>')
    res.end()
    return
  }

  // ----------------------
  // Route /hello
  // ----------------------
  if (pathName === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if ('name' in params) {
      if (params['name'].toLowerCase() === 'guy') {
        res.write('<p>Bonjour, je suis Guy Soumelong, étudiant en 4ème année.</p>')
      } else {
        const random = randomResponses[Math.floor(Math.random() * randomResponses.length)]
        res.write(`<p>${random} ${params['name']}!</p>`)
      }
    } else {
      res.write('<p>Hello anonymous!</p>')
    }
    res.end()
    return
  }

  // ----------------------
  // Route /about
  // ----------------------
  if (pathName === '/about') {
    const jsonPath = path.join(__dirname, 'content', 'about.json')
    if (fs.existsSync(jsonPath)) {
      const aboutContent = require(jsonPath)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify(aboutContent, null, 2))
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.write('404 Not Found - JSON manquant')
    }
    res.end()
    return
  }

  // ----------------------
  // Route par défaut (404)
  // ----------------------
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.write('404 Not Found')
  res.end()
}

module.exports = {
  serverHandle
}
