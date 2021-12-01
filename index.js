// const chalk = require('chalk')
const express = require('express')

const app = express()

app.get('/home', (req, res) => {res.send('<h1>Hola mundo </h1>')})
app.get('/page', (req, res) => {res.send({message: 'Hola mundo'})})

const port = 3000
app.listen(port, () => {
  const environment = process.env.NODE_ENV
  console.log('Servidor corriendo en: ', 'http://localhost:3000/home')
})
// console.log(chalk.bgCyan.italic.bold('Hello world!'));