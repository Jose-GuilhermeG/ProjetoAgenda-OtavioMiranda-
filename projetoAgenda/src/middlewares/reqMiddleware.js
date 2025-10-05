const csrfTokenMiddleware = (req,res,next)=>{
    res.locals.csrf_token = req.csrfToken()
    next()
}
const messageMiddleware = (req,res,next)=>{
    res.locals.message = req.session.flash
    req.flash()
    next()
}

module.exports = [csrfTokenMiddleware ,messageMiddleware ]