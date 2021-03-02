const fs = require( "fs") ;
const path = require( "path") ;
function getAllProducts(){
	const productsFilePath = path.join(__dirname, '../data/productos.json');
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}
function writeProducts(productsToSave){
	const productsToStringify = JSON.stringify(productsToSave, null, ' ');
	return fs.writeFileSync('./data/productos.json', productsToStringify);
	
}

function generateNewId(){
	const products = getAllProducts();
	return products.pop().id + 1;
}


const controller = {
    
}
module.exports = controller;