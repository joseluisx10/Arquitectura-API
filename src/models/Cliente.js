const {Schema, model} = require('mongoose');

let clientesSchema= new Schema({
    
    _id: {
        type: Number,
        required: true
    },
    nombre : {
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

module.exports= new model('Client', clientesSchema);