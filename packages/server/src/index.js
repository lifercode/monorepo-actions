const express = require('express')
const cors = require('cors')
console.log('hi')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  return res.json({ text: 'hello world from API' })
})

app.listen(5000, () => console.log('run on 5000'))
