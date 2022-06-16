require('dotenv').config()
const {DATABASE_URL} = process.env
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    DATABASE_URL, //Would be the database URL and the URL would actually be in the dotenv file
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

module.exports = sequelize