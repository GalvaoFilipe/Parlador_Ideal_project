const db = require("../index");

db.defaults({ user: [], email: [], senha: [] }).write()

const login = express()

login.use(cors())
login.use(bodyParser.json())

const PORT = 4000;

login.get('/user', (req, res) => {
  const data = db.get("user").value()
  return res.json(data)
})

login.post('/user/new', (req, res) => {
  const note = req.body
  db.get("user").push().write()
  res.json({ success: true })
})

return login;