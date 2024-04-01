const routes = {}
const express = require('express')
const loadRoutes = express()

routes.user = require('./userRouter')

loadRoutes.use('/api', routes.user)

module.exports = loadRoutes;