//imports
const express = require("express");
const routes = express.Router();

//views
const home = require('../projetoAgenda/src/controllers/homeControl')

routes.get('/',home.homeGet)

module.exports = routes