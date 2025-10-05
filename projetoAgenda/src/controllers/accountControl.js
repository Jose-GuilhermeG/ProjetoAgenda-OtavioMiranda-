//imports
const {Login , Register } = require("../models/accountModel")

exports.loginGet = (req,res)=>{
    res.render('login')
}

exports.loginPost = (req,res)=>{
    const login = new Login(req.body)
    res.send("teste")
}

exports.registerGet = (req,res)=>{
    res.render('register')
}

exports.registerPost = async (req,res)=>{
    const register = new Register(req.body)


    if(register.isValid){
            req.flash("success",'User registrado')
            res.redirect('/');
            return
    }   
        
    register.errors.forEach(err=>req.flash("error",err))

    res.redirect("/account/register")
}
