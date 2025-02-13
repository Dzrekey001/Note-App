const express = require("express");
const cors = require('cors')

const app = express();


let notes = [
  {
    "id": "1",
    "content": "HTML is easy",
    "important": true
  },
  {
    "id": "2",
    "content": "Browser can execute only JavaScript",
    "important": true
  },
  {
    "id": "3",
    "content": "GET and POST are the most important methods of HTTP protocol",
    "important": false
  },
  {
    "id": "4",
    "content": "cook good meal",
    "important": false
  },
  {
    "id": "5",
    "content": "Go to school",
    "important": false
  },
  {
    "id": "6",
    "content": "Register a writer",
    "important": false
  }
]

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id
  const data = notes.find((n) => n.id === id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ error: `Data not found for id ${id}` })
  }
})

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id
  const data = notes.find((n) => n.id === id)
  res.status(204).json({ data })
})

app.post('/api/notes', (req, res) => {
  const body = req.body

  if (!body.content) return res.status(400).json({ error: "No Data provided" })

  const data = {
    important: Boolean(body.important) || false,
    content: body.content,
    id: generateId()
  }
  notes.push(data);
  res.json(data);
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

const PORT = 3000
app.listen(process.env.PORT || PORT)