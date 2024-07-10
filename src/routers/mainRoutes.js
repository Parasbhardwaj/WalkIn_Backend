const express = require('express');
const mainRouter = express.Router();
const accessRoutes = require('./accessRoutes')
const driveRoutes = require('./driveRoutes')

mainRouter.use('/user',accessRoutes);
mainRouter.use('/drive',driveRoutes);

module.exports = mainRouter;