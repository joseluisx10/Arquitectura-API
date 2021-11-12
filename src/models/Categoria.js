const {Schema, model} = require('mongoose');

let categoriaSchema= new Schema({

    _id:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    estado: String,
    productos:String

})

module.exports= new model('Category', categoriaSchema);