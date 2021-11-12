const {Schema, model}= require('mongoose');

let productosSchema = new Schema({
    codigo: {
        type: Number,
    },
    marca: String,
    categoria: String,
    descripcion: String,
    precio:{
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0
    },
    img: String

})
module.exports = new model('Product', productosSchema);