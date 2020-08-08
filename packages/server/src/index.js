const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  console.log({ req })
  return res.json({ text: 'hello world from API' })
})

app.listen(5000, () => console.log('run on 5000'))
