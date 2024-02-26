const express = require('express')
const { use } = require('./routers/patient.router')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extends: false }))
const patientRouter = require('./routers/patient.router')

app.use('/', patientRouter)


app.get('/', (req, res) => {
    res.send('Welcome to treatment API')
})

app.all('/', (req, res) => {
    res.send('tidak terhubung')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running di port ${port}`))