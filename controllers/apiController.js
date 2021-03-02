const { user, book , category} = require('../database/models');
const bcryptjs =require('bcryptjs');
const controller = {
    list: async(req, res) => {
        const users = await user.findAll({
            attributes:["name", "id", "email"],
              
        })
        const newUsers =await users.map((user)=>{
            const newUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                detail: "http://localhost:3000/api/users/" + user.id
            }
            return newUser
        })

        res.json({
            count:newUsers.length,
            newUsers});
    },
    detail: async(req,res) =>{
    const id = req.params.id
    const userDetail =await user.findOne({
        where: {id:id}
    },{
        attributes:["name", "id", "email", "birth_date", "adress", "image","username",]
    })
    res.json(userDetail)
    },
    
    products: async(req,res)=>{
    const books= await book.findAll({include:['category', 'editorial', 'writer']}) 
    const categoria = await category.findAll({include:['books']});
    const count = books.length
    
 
   
const countByCategory = await categoria.map((category)=>{
    
    const countCategory = {
        name: category.name,
        books: category.dataValues.books.length
    }
   
    return countCategory
    
})
 console.log(countByCategory)
 
    res.json({
        count: {count},
        coountBycategory: {countByCategory},
        products: {books}
    })
    },

    productDetail: async(req,res)=>{
        const id = req.params.id
        const books= await book.findOne({where: {id:id}},{include:['category', 'editorial', 'writer']})
     
        res.json(books)
    },
    
    loginValidation: async(req,res)=>{
    email=req.body.email
     const userLog= await user.findOne({where:{email: email} })
    
    if(userLog && bcryptjs.compareSync(req.body.password, userLog.password)){
        res.json({
            meta:
            {
            status:"success"
            }}  
        )
        return;
    } else {
        res.json({
            meta:{
                status:"400"
            }
        })
    }
}
  
}
module.exports= controller