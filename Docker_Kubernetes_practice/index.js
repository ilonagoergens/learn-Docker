const express = require('express')
const app = express ()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, Kubernetes!')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Express server listening at http://0.0.0.0:${port}`)
})

