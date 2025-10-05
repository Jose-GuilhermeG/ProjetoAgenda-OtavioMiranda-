
class BodyProcess{
    
    constructor(body){
        this.body = body
        this.attrs = []
        this.data = {}
    }

    initClass(){
        this.assignAttrs()
        this.assignData()
    }

    assignAttrs(){
        for(let attr of this.attrs ) this[attr] = this.body[attr] ;
    }

    assignData() {
        for(let attr of this.attrs ) this.data[attr] = this.body[attr];
    }

}

class ErrorsProcess extends BodyProcess{
    constructor(body){
        super(body)
        this.errors = []
        this.isValid = true
        this.errorsSupported = 0
    }

    processErros(){
        this.isValid = this.errors.length <= this.errorsSupported
    }

}

class Validate extends ErrorsProcess{
    initClass(){
        super.initClass()
        this.validatedData = this.validate()
    }

    cleanUp(){
        const cleanData = {}
        for(let key in this.data){
            if(!this.data[key]) cleanData[key] = "";
            else cleanData[key] = this.data[key]
        }
        return cleanData
    }

    validate(){
        const cleanData = this.cleanUp()
        return cleanData
    }
}

class MongooseProcess extends Validate{
    constructor(body){
        super(body)
        this.model = undefined
    }

    verifyModel(){
        if(!this.model) throw new Error("Model tem que ser definido")
    }

    async register(){
        try{
            if(!this.isValid) throw new Error("Conteudo não valido")
    
            this.obj = await this.model.create(this.validatedData);
            return this.obj
        }catch(e){
            console.log(e)
            return e
        }
        
    }

    initClass(){
        super.initClass()
        this.verifyModel()
    }

    
}


module.exports = class BaseModel extends MongooseProcess{}