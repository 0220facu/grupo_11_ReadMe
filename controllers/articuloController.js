const fs = require( "fs") ;
const path = require( "path") ;
const db = require('../database/models')
const {book , category, writer, editorial } = require('../database/models')
const {validationResult} = require('express-validator')

const controller={
    articulo: async(req, res) => {
        const id = req.params.id;
        const product =await book.findByPk(id)
        const categories = await category.findAll()
        res.render('articulo',{producto: product, categories})
    },
    crear:async (req,res) => {
        const products =await book.findAll({include: 'category', })
        const categories = await category.findAll()
        const writers = await writer.findAll()
        const editorials = await editorial.findAll()
        
        res.render('admin',{ products : products,  categories, writers, editorials})
    },
        subir: async (req,res, next) =>{

        const errors = validationResult(req)

        if (!errors.isEmpty()){
        const products =await book.findAll({include: 'category', })
        const categories = await category.findAll()
        const writers = await writer.findAll()
        const editorials = await editorial.findAll()
            res.render('admin', {errors: errors.errors, products : products, categories, writers, editorials })
            return
        }
      const newProduct =await book.create({
        name : req.body.titulo,
        year : req.body.publicacion,
        language: req.body.idioma,
        synopsis:  req.body.sinopsis,
        pages : req.body.paginas, 
        price: req.body.precio, 
        famous: req.body.destacado == undefined ? 0 : 1 ,
        image : req.files[0].filename,
        category_id:req.body.categoria  ,  
        editorial_id:req.body.editorial,  
        writer_id:req.body.writer })    
        
        res.redirect('/');
},
editar: async (req, res) => {
    const id = req.params.id;
    const products =await book.findAll({include: 'category'})
    const categories = await category.findAll()
    const writers = await writer.findAll()
    const productoParaEditar = await book.findByPk(id, {include:['category', 'editorial', 'writer']})
    const editorials = await editorial.findAll()
    
    

    res.render('edit',{ products : products,productoParaEditar: productoParaEditar, writers, categories, editorials})
},
modificar: async (req, res) =>{
    
    const id = req.params.id;
    const productoParaEditar = await book.findByPk(id, {include:['category', 'editorial', 'writer']})
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        const products =await book.findAll({include: 'category', })
        const categories = await category.findAll()
        const writers = await writer.findAll()
        const editorials = await editorial.findAll()
            res.render('edit', {errors: errors.errors, products : products, categories, writers, editorials, productoParaEditar })
            return
        }    
  
   await productoParaEditar.update({
        name: req.body.titulo,
        year: req.body.publicacion,
        price: req.body.precio,
        language: req.body.idioma,
        synopsis: req.body.sinopsis,
        pages: req.body.paginas,
        famous: req.body.destacado == undefined ? 0 : 1 ,
        image :  productoParaEditar.image,
        editorial_id: req.body.editorial,
        category_id: req.body.category,
        writer_id: req.body.writer,
        
    })
        res.redirect('/');
},
eliminar:async (req,res) =>{
    const id = req.params.id;
    const productoParaEditar = await book.findByPk(id)
   await productoParaEditar.destroy()
    res.redirect('/');
}
}
module.exports = controller;


