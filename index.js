const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.status(200).send(`
    <marquee>Hello world!</marquee>
  `)
})

module.exports = app