const express= require('express');
const router= express.Router();
require("../dbConnection")
const dbProduct = require('../models/Producto')

router.get('/', async(req, res)=>{

    let dataProd;
//Busqueda de expresiones regulares
    if (!/\?.+/.test(req.url)) {
        dataProd = await dbProduct.find();
        res.setHeader("Accept", "Application/Json");
        res.json(dataProd);
    }
    else {

        dataProd = await dbProduct.find(req.query);
        res.setHeader("Accep", "Application/Json");
        res.json(dataProd);
    }

    
});

router.post('/', (req, res)=>{ 
     
    async function crear(p)
    {
        let dataProd = await dbProduct.find({ codigo:p.codigo});
        if(dataProd.length == 0)
        {
            let modelProducto = dbProduct(p);
            return await modelProducto.save();
            
        }else{

           return [];
           //return throw new Error("")
        }
        
    }

    crear(req.body)
    .then(result =>{

        if(result.length != 0){
            console.log("Producto insertado con exito!!! \n " +result);
            res.status(201).send("Producto insertado con exito!!!");
        }else{
            console.log("error");
            res.status(409).send("Error");
        }
        
    })
});

router.put('/:id', async(req, res)=>{
    
    await dbProduct.updateOne({codigo: req.params.id}, {$set: req.body});
    res.status(201).end();

});

router.delete('/:id', async(req, res)=>{

    await dbProduct.deleteOne({codigo: req.params.id});
    res.status(204).end();
});

router.delete('/', async(req, res)=>{
    await dbProduct.remove();
    //await dbProduct.deleteMany();
    res.status(204).end();
})

module.exports= router;