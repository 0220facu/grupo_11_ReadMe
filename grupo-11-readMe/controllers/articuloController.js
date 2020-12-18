const fs = require( "fs") ;
const path = require( "path") ;



function getAllProducts(){
    const productsFilePath = path.join(__dirname, '../data/productos.json');
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}
const controller={
    articulo: (req, res) => {
        const products = getAllProducts()
        const id = req.params.id;
        const producto = products.find((product) => {
            return product.id == id
        })
        res.render('articulo',{producto: producto,})
    },
   
}

module.exports = controller;


