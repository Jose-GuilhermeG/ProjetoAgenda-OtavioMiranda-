//imports
const env = require('dotenv').config();
const path = require("path");

const projectDir = path.resolve(__dirname,'projetoAgenda')

const port = process.env.PORT || 8000

module.exports.port = port

module.exports.staticPath = path.resolve(__dirname,projectDir,'public')
module.exports.viewPath = path.resolve(__dirname,projectDir,'src','views')
module.exports.viewEngine = 'ejs'

module.exports.mongooseConnect = {
    sringUrl : process.env.CONNECTIONSTRING,
    options : {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
}

module.exports.mongoOptions = {
    mongoUrl : process.env.CONNECTIONSTRING
}

module.exports.sessionOptions = {
    secret : process.env.SESSIONSECRET,
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000 * 60 * 24 * 7, // milisegundos minutos horas dias
        httpOnly : true
    }
}