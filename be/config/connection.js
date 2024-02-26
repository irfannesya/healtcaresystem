const dotenv = require('dotenv')
const { Sequelize, DataTypes } = require('sequelize')
dotenv.config()
const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        dialect: "postgres",
        logging: false
    }

)

//connection test
db.authenticate()
    .then(() => console.log('Postgres conncted'))
    .catch(() => console.log('connection failed' + Error))


// sincron model dengan database
db.sync({ force: false, alter: true })

module.exports = db