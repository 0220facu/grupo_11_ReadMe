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
    crear: (req,res) => {
        const products = getAllProducts()
        res.render('admin',{ products : products,})
    },
        subir: (req,res, next) =>{
           console.log( req.body.genero)
      const newProduct ={
        id: generateNewId(),
        titulo: req.body.titulo,
        publicación : req.body.publicacion,
        editorial:req.body.editorial,
        idioma: req.body.idioma,
        sinopsis:  req.body.sinopsis,
        escritor: req.body.escritor,
        categoria: req.body.genero,
        paginas: req.body.paginas, 
        precio: req.body.precio, 
        destacado: req.body.destacado == undefined ? "No" : req.body.destacado ,
        img: req.files[0].filename}
          
          const products = getAllProducts();
		const productsToSave = [...products, newProduct];
        writeProducts(productsToSave);
        
        res.redirect('/');
},
editar: (req, res) => {
    const id = req.params.id;
    const products = getAllProducts();
    const productoParaEditar = products.find((product) => {
        return product.id == id
    })
    res.render('edit',{ products : products,productoParaEditar: productoParaEditar})
},
modificar: (req, res) =>{
    const id = req.params.id;
    const products = getAllProducts();
    let productoEditado = products.map(product => {
            if(product.id == id){
                return reloj = req.body
            }
            return reloj
    })
    const productsToSave = [...products, newProduct];
        writeProducts(productsToSave);
        
        res.redirect('/');
},
eliminar:(req,res) =>{
    const id = req.params.id;
    const products = getAllProducts();
    const productoborrado = products.filter((product) => {
        return product.id != id
    })
    console.log(productoborrado)
        writeProducts(productoborrado);
        res.redirect('/');
}
}
module.exports = controller;