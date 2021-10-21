
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.get('/api/v1/profile', (req, res) => {
    res.send({ 
       name: "abdurrehman",
    rollno :"12345",
    address: "ffbeegjebgie vlnv genviwe",
  })
})
  app.put('/api/v1/profile', (req, res) => {
    res.send('Hello HERE IS YOUR PROFILE!')
  })
  app.post('/api/v1/profile', (req, res) => {
    res.send('Hello HERE IS YOUR PROFILE!')
  })
  app.delete('/api/v1/profile', (req, res) => {
    res.send('Hello! PROFILE IS DELETED')
  })
 
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${ PORT}`)
})