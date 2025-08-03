require('dotenv').config();
const express = require('express')
const cors = require('cors')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
SERVER_PORT=4004

const app = express()

const { seed } = require('./seed')

app.use(express.json())
app.use(cors())


const {
    login,
    register,
    favorite,
    getFavorite,
    deleteFavorite,

} = require('./controller.js')

app.post('/seed', seed)
app.post('/register', register)
app.post('/login', login)

app.post('/favorite', favorite)
app.get('/getFavorite', getFavorite)

app.delete('/getFavorite/:name', deleteFavorite)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))