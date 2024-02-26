const Patient = require('../models/patient.model')
const patientControler = {
    insertData: async (req, res) => {
        try {
            console.log(req.body);
            const { name, date, patientid, treatment, Prescribed, cost } = req.body
            if (!name) throw new Error('nama harus di isi');
            if (!date) throw new Error('tangal harus di isi');
            if (!patientid) throw new Error('ID harus di isi');
            if (!treatment) throw new Error('treatment harus di isi');
            if (!Prescribed) throw new Error('Prescribed harus di isi');
            if (!cost) throw new Error('cost harus di isi');


            await Patient.create(req.body)

            res.status(200).json({
                message: 'Succes'
            })
        } catch (Error) {
            res.status(400).json({
                message: Error.message
            })
        }
    }
}

module.exports = patientControler