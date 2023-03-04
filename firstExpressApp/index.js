const express = require('express')
const app = express()

// app.use(() => {
//   console.log('WE GOT A NEW REQUEST!!')
// })

app.get('/', (req, res) => {
  res.send('This is the home page')
})

app.post('/cats', (req, res) => {
  res.send('POST REQUEST TO /cats!!!!!! THIS IS NOT A GET REQUEST!')
})

app.get('/cats', (req, res) => {
  res.send('MEOW!!!')
})

app.get('/dogs', (req, res) => {
  res.send('WOOF!!!')
})

// must be on the bottom because it refers to unspecified routes
// if placed at the top every path is unknown becuase this get
// request will render first
app.get('*', (req, res) => {
  res.send(`I dont't know that path!!!`)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
