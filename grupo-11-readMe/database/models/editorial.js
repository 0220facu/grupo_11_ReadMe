module.exports = (sequelize, DataTypes) => {
    const alias= 'editorial'
    
    const colums ={
    name = DataTypes.STRING
    }
    
    const config = {
        tableName: "editorials",
        timestamps: false
    }
    
    editorial.associate = (models)=> {
        editorial.hasMany(models.book,{
        as = 'books',
        foreingKey = 'book_id'
        })
    }
    return editorial
    }