require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , controller = require('./controller')


const app = express();
app.use(bodyParser.json());
app.use(cors());
//74E
app.use(express.static(`${__dirname}/../public/build`))
// part of 74D-2
app.put('/api/bin/:id', controller.updateBin)

massive(process.env.CONNECTIONSTRING).then( db => {
    app.set('db', db)
   
    app.listen(process.env.PORT, ()=> {
        console.log(`I'm here on port: ${process.env.PORT}`)
    })
})