const express = require('express');
const router = express.Router();
require('../dbConnection');
const dbCar= require('../models/Carrito');

router.get('/', async(req, res)=>{
    
    let dataCarrito = await dbCar.find();
    res.setHeader("Accep", "Application/Json");
    res.json(dataCarrito);

})

router.post('/', async(req, res)=>{
    
    let nuevoModelCarrito = dbCar(req.body);
    await nuevoModelCarrito.save();
    res.status(201).send("Cliente insertado con exito!!!");
})

router.put('/:_id', async(req, res)=>{

    await dbProduct.updateOne({_id: req.params._id}, {$set: req.body});
    res.status(201).end();
})

router.delete('/:_id', async(req, res)=>{
    await dbCategory.deleteOne({_id: req.params._id})
    res.status(204).end();
});



module.exports= router;