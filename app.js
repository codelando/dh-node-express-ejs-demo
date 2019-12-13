console.log('Estamos arrancando el app.js');

const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('index', {
        pageClass: 'page-home'
    });
});

app.get('/acerca-de', (req, res) => {
    res.render('about', {
        pageClass: 'page-about'
    });
});

app.get('/contacto', (req, res) => {
    res.render('contact', {
        pageClass: 'page-contact'
    });
});

let products = [
    {
        name: 'Zapatillas Kalenji', 
        price: '3500',
        image: 'product-1.jpg'
    },
    {
        name: 'Zapatillas Newfeel', 
        price: '4560',
        image: 'product-2.jpg'
    },
    {
        name: 'Zapatillas Diadora', 
        price: '5670',
        image: 'product-3.jpg'
    },
    {
        name: 'Alpargatas El Gauchito', 
        price: '1500',
        image: 'product-4.jpg'
    }
]

app.get('/productos', (req, res) => {
    res.render('products', {
        pageClass: 'page-products',
        products
    });
});

// app.get('*', (req, res) => {
//     res.send('Ésta es la página random');
// });

app.listen(3000, () => console.log('Iniciando servidor en el puerto 3000'));