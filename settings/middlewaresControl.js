//imports
const reqMiddleware = require("../projetoAgenda/src/middlewares/reqMiddleware")
const {csrfErr} = require("../projetoAgenda/src/middlewares/errorsMiddleware")

const setMiddlewares = (app,middlewares)=>middlewares.forEach(element=>app.use(element))

const ProjectMiddlewares = [
    csrfErr,
    [...reqMiddleware]
] 

module.exports = {setMiddlewares , ProjectMiddlewares}