const express = require('express');
const app = express();
const productosRouter= require('./routes/productos');
const clientesRouter= require('./routes/clientes');
const categoriasRouter= require('./routes/categorias');

app.use(express.json());
app.use('/Api/Productos', productosRouter);
app.use('/Api/Clientes', clientesRouter);
app.use('/Api/Categorias', categoriasRouter);

app.get('/', (req, res)=>{res.send('Bienvenidos al Servicio Api');})

app.get('/Api', (req ,res)=>{
    res.setHeader('Version', '1.0');
    res.setHeader('Description', 'Rest Api')
    //cod html 
    res.end();
})


app.listen(process.env.PORT || 3000, function () {

    console.log('API andando con express...');

});
