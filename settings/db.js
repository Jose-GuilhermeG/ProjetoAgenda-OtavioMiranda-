//imports
const mongoose = require("mongoose");
const {EventEmitter} = require("events");
const {sringUrl , options} = require("./configs").mongooseConnect

const dbEvents = new EventEmitter()


async function mongooseConnect(){
    try{
        const connection = await mongoose.connect(sringUrl , options);
        console.log("Db Conectado")
        dbEvents.emit("InitServer")
    }catch (e){
        console.error(e)
    }
    
}

module.exports = {mongooseConnect , dbEvents} 