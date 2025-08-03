const sequelize = require('./sequelize')

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS users_fav;
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            user_id serial primary key, 
            username varchar(20),
            first_name varchar(100), 
            last_name varchar(100),  
            password varchar(100)
        );
        CREATE TABLE users_fav (
            users_fav serial primary key, 
            user_id integer references users(user_id), 
            stock_ticker varchar(50)
        );
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}
