const fs = require( "fs") ;
const path = require( "path") ;
const db = require('../database/models')
const {book , user, category} = require('../database/models')


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

const controller={
    articulo: (req, res) => {
        const products = getAllProducts()
        const id = req.params.id;
        const producto = products.find((product) => {
            return product.id == id
        })
        res.render('articulo',{producto: producto,})
    },
    crear:async (req,res) => {
        const products = getAllProducts()
       const categories = await category.findAll();
        res.render('admin',{ products : products, categories})
    },
        subir: async (req,res, next) =>{
      const newProduct =await book.create({
        name : req.body.titulo,
        year : req.body.publicacion,
        language: req.body.idioma,
        synopsis:  req.body.sinopsis,
        pages : req.body.paginas, 
        price: req.body.precio, 
        famous: req.body.destacado == undefined ? 0 : 1 ,
        image : req.files[0].filename})    
        
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
        product.id= product.id,
        product.titulo= req.body.titulo,
        product.publicación = req.body.publicacion,
        product.editorial=req.body.editorial,
        product.destacado = req.body.destacado
        product.idioma= req.body.idioma,
        product.sinopsis=  req.body.sinopsis,
        product.escritor= req.body.escritor,
        product.categoria= req.body.categoria,
        product.paginas= req.body.paginas, 
        product.precio= req.body.precio, 
        req.files[0].filename ? product.img= req.files[0].filename : product.img = product.img
            }
            return product
    })
        writeProducts(productoEditado);
        
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


