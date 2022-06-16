require('dotenv').config
const express = require('express')
const cors = require('cors')
SERVER_PORT=4004

const app = express()

const { seed } = require('./seed')

app.use(express.json())
app.use(cors())

app.post('/seed', seed)


app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))