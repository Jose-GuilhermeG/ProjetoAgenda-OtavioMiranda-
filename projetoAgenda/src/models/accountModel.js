//import
const mongoose = require("mongoose");
const BaseModel = require("./baseModel")
const validator = require("validator")

const UserSchema = new mongoose.Schema({
    username : {type : String , require : true , unique : true , maxLength : 120} ,
    email : {type : String , require : true , unique : true},

})

const UserModel = mongoose.model("User",UserSchema)

class Login extends BaseModel {
    constructor(body){
        super(body)
        this.attrs = ['email' , 'password']
        this.initClass()
        this.model = UserModel
    }

    validate(){
        const cleanData = super.validate()

        if(!validator.isEmail(cleanData.email)) this.errors.push("Email invalido")

        if(!cleanData.password) this.errors.push("Senha é um campo obrigatorio")
            
        if(cleanData.password.length < 3 || cleanData.password.length > 50) this.errors.push("A senha tem o minimo de 3 e o maximo de 50 caracteres")

        
        this.processErros()
        return cleanData
    }
}
class Register extends BaseModel {
    constructor(body){
        super(body)
        this.attrs = ['username','email' , 'password']
        this.model = UserModel
        this.initClass()
    }

    validate(){
        const cleanData = super.validate()

        if(!cleanData.username) this.errors.push("Username é um campo Obrigatorio")

        if(!validator.isEmail(cleanData.email)) this.errors.push("Email invalido")

        if(!cleanData.password) this.errors.push("Senha é um campo obrigatorio")
            
        if(cleanData.password.length < 3 || cleanData.password.length > 50) this.errors.push("A senha tem o minimo de 3 e o maximo de 50 caracteres")

        
        this.processErros()
        return cleanData
    }
}

module.exports.Login = Login 
module.exports.Register = Register