const express = require('express');
const router = express.Router();
require("../dbConnection");
const dbCategory= require('../models/Categoria');

router.get('/', async(req, res)=>{

    let dataCategory; 

    if (!/\?.+/.test(req.url)) {
        dataCategory = await dbCategory.find();
        res.setHeader("Accep", "Application/Json");
        res.json(dataCategory);
    }
    else {

        if(req.query.limit){
            let size= Number(req.query.limit);
            dataClient = await dbCategory.find().limit(size);
            res.setHeader("Accep", "Application/Json");
            res.json(dataCategory);
        }else{
            dataClient = await dbCategory.find(req.query);
            res.setHeader("Accep", "Application/Json");
            res.json(dataCategory);      
        }
    } 

})

router.post('/', async(req, res)=>{
    
    let verifiCategoria = await dbCategory.find({_id: req.body._id});
    if(verifiCategoria.length == 0){
        let nuevoModelCategory =dbCategory(req.body);
        let nCategoria= await nuevoModelCategory.save();
        console.log('Categoria creado con exito \n'+ nCategoria);
        res.status(201).send('Categoria creado con exito.');
    }else{
        console.log('Error: 409 No se pudo crear');
        res.status(409).send('Error crear');
    }
});

router.put('/:_id', async(req, res)=>{
    await dbCategory.updateOne({_id: req.params._id}, {$set: req.body})
    res.status(201).end();
})

router.delete('/:_id', async(req, res)=>{
    await dbCategory.deleteOne({_id: req.params._id})
    res.status(204).end();
});


module.exports= router;