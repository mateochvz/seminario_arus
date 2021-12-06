// const chalk = require('chalk')
const express = require('express')
const x=[]

const app = express()

app.get('/home', (req, res) => {res.send('<h1>Hola mundo </h1>')})
app.get('/page', (req, res) => {res.send({message: 'Hola mundo'})})
app.post('/user',express.json(),(req, res)=>{
  console.log(req.body)
  x.push(req.body)
  res.send({mensaje: 'este es el post'})
})
app.get('/user',(req,res)=>{
  res.send({users:x})
})

const port = 3000
app.listen(port, () => {
  const environment = process.env.NODE_ENV
  console.log('Servidor corriendo en: ', 'http://localhost:3000/home')
})
// console.log(chalk.bgCyan.italic.bold('Hello world!'));