const express= require('express');
const router = express.Router();
require('../dbConnection');
const dbClient= require('../models/Cliente');

router.get('/', async(req ,res)=>{

    let dataClient; 

    if (!/\?.+/.test(req.url)) {
        dataClient = await dbClient.find();
        res.setHeader("Accep", "Application/Json");
        res.json(dataClient);
    }
    else {

        if(req.query.limit){
            let size= Number(req.query.limit);
            dataClient = await dbClient.find().limit(size);
            res.setHeader("Accep", "Application/Json");
            res.json(dataClient);
        }else{
            dataClient = await dbClient.find(req.query);
            res.setHeader("Accep", "Application/Json");
            res.json(dataClient);      
        }
    } 
});

router.post('/', async(req, res)=>{

    let verifiCliente =await dbClient.find({_id: req.body._id});

    if(verifiCliente.length == 0){

        let nuevoModelClient = dbClient(req.body);
        let nClient = await nuevoModelClient.save();
        console.log('Cliente creado con exito' + nClient);
        res.status(201).send("Cliente insertado con exito!!!");
    }else{
        console.log("error: 409 No se pudo crear Cliente");
        res.status(409).send("Error");
    }
    
});

router.put('/:_id', async(req, res)=>{
    await dbClient.updateOne({_id: req.params._id}, {$set: req.body})
    res.status(201).end();
})

router.delete('/:_id', async(req, res)=>{
    await dbClient.deleteOne({_id: req.params._id})
    res.status(204).end();
});

module.exports= router;
