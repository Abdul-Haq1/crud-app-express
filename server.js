const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()
const PORT = process.env.PORT || 8000

// connect mongo db with node env

MongoClient.connect('mongodb+srv://omeon:omeon@merncluster.eqkfofh.mongodb.net/?retryWrites=true&w=majority&appName=merncluster', (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

//body-parser before your CRUD handlers!
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quote', (req, res) => {
    console.log(req.body)
    res.send('data received')
})




app.listen(PORT, () => console.log(`listening on ${PORT}`))

