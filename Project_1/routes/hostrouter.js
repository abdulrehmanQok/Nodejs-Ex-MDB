
const express = require('express');
const hostRouter = express.Router();

// Local Module
const home_controller= require('../controllers/home')

hostRouter.get("/add-home",home_controller.get_add_home);

hostRouter.post("/add-home", home_controller.post_home_added)

exports.hostRouter = hostRouter;
