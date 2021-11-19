const express = require('express');
const app = express();
const path = require('path');
const productosRouter= require('./routes/productos');
const clientesRouter= require('./routes/clientes');
const categoriasRouter= require('./routes/categorias');
const carritoRouter= require('./routes/carrito');
const Carrito = require('./models/Carrito');

app.use(express.json());
app.use('/api/Productos', productosRouter);
app.use('/api/Clientes', clientesRouter);
app.use('/api/Categorias', categoriasRouter);
app.use('/api/Carritos', carritoRouter);



app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");

app.get('/', (req, res)=>{res.render('home');})
app.get('/productos', (req, res) =>{ res.render('producto')});
app.post('/productos', (req, res) =>{ res.redirect('productos');});
app.get('/clientes', (req, res)=>{res.render('cliente')});
//app.get('/categorias', (req, res)=>{res.render('categoria')});
//app.get('carrito', (req, res) => {res.render('Carrito')});


app.get('/Api', (req ,res)=>{
    res.setHeader('Version', '1.0');
    res.setHeader('Description', 'Rest Api')
    //cod html 
    res.status(204).end();
})


app.listen(process.env.PORT || 3000, function () {

    console.log('API andando con express...');

});
