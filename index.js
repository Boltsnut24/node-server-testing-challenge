require('dotenv').config();

const server = require('./api/server.js')

const port = process.envPORT || 4000;

server.listen(port, () => {
    console.log(`\n *** server is live on ${port} port ***`)
})