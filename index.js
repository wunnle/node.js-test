const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.status(200).send(`
    <marquee>Hello world!</marquee>
  `)
})

app.get('/secret', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.status(200).send(`
    <h1>This is a secret page!</h1>
  `)
})

module.exports = app