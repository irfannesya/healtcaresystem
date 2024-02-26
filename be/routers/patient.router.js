const router = require('express').Router()
const patientControler = require('../controllers/patient.controler')

router.post('/patient', patientControler.insertData)

module.exports = router