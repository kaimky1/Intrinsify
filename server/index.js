require('dotenv').config
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

app.post('/seed', seed)


app.get('/', (req,res) => {
    sendTextMessage();
})

const sendTextMessage = () => {
    client.messages
    .create({
       body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
       from: '+19807377433',
       to: '+18089711951'
     })
    .then(message => console.log(message.sid));
}

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))