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

app.post('/', (req, res) => {
    console.log(req.body)
    client
    .messages
    .create(req.body)
    .then(message => console.log(message.sid, 'Message sent'))
    res.status(200).send("Message Sent!")
}
)

app.post('/register', register)
app.post('/login', login)

app.post('/favorite', favorite)

const sendTextMessage = () => {
    client.messages
    .create({
       body: 'Good day',
       from: '+19807377433',
       to: '+18089711951'
     })
    .then(message => console.log(message.sid, 'Message sent'));
}

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))