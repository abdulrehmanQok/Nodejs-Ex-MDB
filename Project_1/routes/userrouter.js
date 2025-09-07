
// External Module
const express = require('express');
const userRouter = express.Router();
const home_controller=require('../controllers/home')

// Local Module
const { registeredHomes } = require('../controllers/home');

userRouter.get("/", home_controller.home);


module.exports = userRouter;