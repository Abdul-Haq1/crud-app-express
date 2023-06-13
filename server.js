const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8000

//body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quote', (req, res) => {
    console.log(req.body)
})




app.listen(PORT, () => console.log(`listening on ${PORT}`))

