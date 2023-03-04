const colors = require('colors')
const express = require('express')
const app = express()

// app.use(() => {
//   console.log('WE GOT A NEW REQUEST!!')
// })

app.get('/', (req, res) => {
  res.send('This is the home page')
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params
  res.send(`<h1>Viewing Post ID: ${postId}</h1>`)
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



const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`.bgBlue.bold))
