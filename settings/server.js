//imports
const express = require("express");
const app = express();
const routes = require("./router")
const configs = require("./configs");
const {mongooseConnect , dbEvents } = require("./db");
const session = require("express-session");
const mongoStore = require("connect-mongo")
const flash = require("connect-flash")
const helmet = require('helmet');
const csrf = require('csurf');

//ajustes
configs.sessionOptions.store = mongoStore.create(configs.mongoOptions)


//middlewares
app.use(helmet())
app.use(express.urlencoded({extended : true}))
app.use(express.static(configs.staticPath))
app.use(session(configs.sessionOptions))
app.use(flash())
app.use(express.json())
app.use(csrf())
app.use(routes)

app.set('views' , configs.viewPath)
app.set('view engine' , configs.viewEngine)

mongooseConnect()
dbEvents.on('InitServer',initServer)

//functions
function initServer(){
    app.listen(configs.port,()=>console.log(`Server rodando em "http://localhost:${configs.port}"`))
}