const fs = require( "fs") ;
const path = require( "path") ;

function getAllProducts(){
	const productsFilePath = path.join(__dirname, '../data/productos.json');
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}
const controller={
    index: (req, res) => { 
        const products = getAllProducts()
        const destacados = products.filter( ( product)=> { 
            return product.destacado == "si"
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