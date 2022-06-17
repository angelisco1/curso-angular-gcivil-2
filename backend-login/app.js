const express = require('express')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const SECRETO = "qwerty"

const app = express()

app.use(cors())
app.use(express.json())

app.post('/login', (req, res) => {
  const {email, password} = req.body

  axios.get('http://localhost:3000/usuarios?email=' + email)
    .then(resp => {
      console.log(resp.data)
      const usuario = resp.data?.[0]

      if (!usuario) {
        return res.status(401).json('No hay un usuario con ese email')
      }

      if (usuario.password !== password) {
        return res.status(401).json('La contraseña es invalida')
      }

      const token = jwt.sign({username: usuario.nombre}, SECRETO)

      return res.status(200).json({token: token})
    })

})

app.listen(3005, () => {
  console.log('Listening on http://localhost:3005')
})
