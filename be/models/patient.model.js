const { Sequelize } = require('sequelize')
const db = require('../config/connection')

const Patient = db.define('patient', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    patientid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    treatment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Prescribed: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cost: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
},
    {
        freezeTableName: true,
        underscored: true
    })
module.exports = Patient