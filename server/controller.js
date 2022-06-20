const bcrypt = require('bcryptjs');
require('dotenv').config()
const {DATABASE_URL} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres', 
  dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
})

module.exports = {
    register: (req, res) => {
        const {  username, first_name, last_name, password } = req.body;

        const salt = bcrypt.genSaltSync(5);
        const passwordHash = bcrypt.hashSync(password, salt)

        sequelize.query(`
            INSERT INTO users(username, first_name, last_name, password)
            VALUES('${username}', '${first_name}', '${last_name}', '${passwordHash}');
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    favorite: (req, res) => {
        console.log(req.body)
        const { stockTicker } = req.body;
        
        console.log("hit favorite")
        sequelize.query(`
        INSERT INTO users_fav(stock_ticker) 
        VALUES( '${
            stockTicker
        }')
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }



}