exports.err404 = (req,res)=>{
    res.render('errors/404');
}

exports.csrfErr = (err , req ,res , next)=>{
    if(err.code != 'EBADCSRFTOKEN') return next(err);

    res.render('errors/csrfErr')
}       