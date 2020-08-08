const express = require('express')
const cors = require('cors')
console.log('hi')
const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  return res.json({ text: 'hello world from API' })
})

app.listen(PORT, () => console.log(`run on ${PORT}`))
