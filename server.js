const { Sequelize } = require('sequelize')
// DEPENDENCIES
const express = require('express')
const app = express()
const bands = require('./controllers/bands_controller')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controllers')
app.use('/bands', bandsController)

const eventController = require('./controllers/event_controllers')
app.use('/events', eventController)

const stagesController = require('./controllers/stage_controllers')
app.use('/stages', stagesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: http://localhost:${process.env.PORT}/`)
})