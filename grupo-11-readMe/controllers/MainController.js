const fs = require( "fs") ;
const path = require( "path") ;
const {book } = require('../database/models')

function getAllProducts(){
	const productsFilePath = path.join(__dirname, '../data/productos.json');
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}
const controller={
    index: async (req, res) => { 
        const products = book.findAll()
        const destacados = products.filter( ( product)=> { 
            return product.famous == 1
        }) 
        res.render('index' , {
            products : products, 
            destacados : destacados 
         } ) },
carrito: (req, res) => {
        res.render('carrito')
    },
    
}
module.exports = controller;