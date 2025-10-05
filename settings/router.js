//imports
const express = require("express");
const routes = express.Router();

//views
const home = require('../projetoAgenda/src/controllers/homeControl')
const account = require('../projetoAgenda/src/controllers/accountControl')

//home
routes.get('/',home.homeGet)

//account
routes.get('/account/login',account.loginGet)
routes.post('/account/login',account.loginPost)
routes.get('/account/register',account.registerGet)
routes.post('/account/register',account.registerPost)

module.exports = routes