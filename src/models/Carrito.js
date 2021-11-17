const {Schema, model} = require('mongoose');

let carritoSchema = new Schema({

    _id:{
        type: Number,
        required: true
    },
    producto: String,
    cantidad:{
        type: Number,
        default: 0
    },
    monto:{
        type: Number,
        default:0
    }
})

module.exports= new model('Car', carritoSchema);