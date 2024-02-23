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
    favoriteSkin,
    getFavorite,
    getfavoriteSkin, 
    deleteFavorite,
    deleteFavoriteSkin

} = require('./controller.js')

app.post('/seed', seed)
app.post('/register', register)
app.post('/login', login)

app.post('/favorite', favorite)
app.get('/getFavorite', getFavorite)

app.delete('/getFavorite/:name', deleteFavorite)

const sendTextMessage = () => {
    client.messages
    .create({
       body: 'Good day',
       from: '+19807377433',
       to: '+18089711951'
     })
    .then(message => console.log(message.sid, 'Message sent'));
}
sendTextMessage()

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))