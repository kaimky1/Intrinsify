const bcrypt = require("bcryptjs");
require("dotenv").config();
const { DATABASE_URL } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  register: (req, res) => {
    const { username, first_name, last_name, password } = req.body;

    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);

    sequelize
      .query(
        `
            INSERT INTO users(username, first_name, last_name, password)
            VALUES('${username}', '${first_name}', '${last_name}', '${passwordHash}');
        `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  favorite: (req, res) => {
    console.log(req.body);
    const { stockTicker, userID } = req.body;

    console.log("hit favorite");
    sequelize
      .query(
        `
        SELECT stock_ticker 
        FROM users_fav
        WHERE user_id = ${userID}
        `
      )
      .then((dbRes) => {
        let inDB = "";
        for (let i = 0; i < dbRes[0].length; i++) {
          if (dbRes[0][i].stock_ticker != stockTicker) {
            inDB = false;
          } else if (dbRes[0][i].stock_ticker === stockTicker) {
            inDB = true;
            break;
          }
        }
        if (inDB == false) {
          sequelize.query(
            `
        INSERT INTO users_fav(stock_ticker, user_id) 
        VALUES( '${stockTicker}', ${userID})
        `
          );
          res.status(200).send(dbRes[0]);
        }else if(inDB == true){
          console.log("This should be true:", inDB)
          res.status(400).send("Error: Stock already exists in favorites")
        }
      })
        .catch(err => console.log(err))
      },
  

  login: (req, res) => {
    console.log("Logging In User");
    const { username, password } = req.body;
    sequelize
      .query(
        `
    SELECT password, username, user_id FROM users
    WHERE username = '${username}'
`
      )
      .then((dbRes) => {
        console.log(dbRes[0][0].password);
        const existingPassword = bcrypt.compareSync(
          password,
          dbRes[0][0].password
        );
        if (existingPassword) {
          res.status(200).send(dbRes[0][0]);
        } else {
          res.status(400).send("Your password does not match");
        }
      })
      .catch((err) => console.log(err));

    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].username === username) {
    //     const existingPassword = bcrypt.compareSync(
    //       password,
    //       users[i].passwordHash
    //     );
    //     if (existingPassword) {
    //       const cat = { ...users[i] };
    //       delete cat.passwordHash;
    //       res.status(200).send(cat);
    //     } else {
    //       res.status(400).send("User not found.");
    //     }
    //   }
    // }
  },
};
