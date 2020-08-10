const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const { nanoid } = require("nanoid")

const db = lowDb(new FileSync('database/db.json'))

db.defaults({ myPost: [], user: {} }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 4000;

app.get('/myPost', (req, res) => {
  const data = db.get("myPost").value()
  return res.json(data)
})

app.post('/myPost/new', (req, res) => {
  const note = req.body
  db.get("myPost").push({
    ...note, id: nanoid()
  }).write()
  res.json({ success: true })
})

app.listen(PORT, ()=> {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})