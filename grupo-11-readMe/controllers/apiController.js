const { user } = require('../database/models');
const bcryptjs =require('bcryptjs')
const controller = {
    list: async(req, res) => {
        const users = await user.findAll()
        res.json(users);
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