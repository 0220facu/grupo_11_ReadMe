module.exports = (sequelize, DataTypes) => {
    const alias= 'writer'
    
    const colums ={
    name = DataTypes.STRING
    }
    
    const config = {
        tableName: "writers",
        timestamps: false
    }
    
    writer.associate = (models)=> {
        writer.hasMany(models.book,{
        as = 'books',
        foreingKey = 'book_id'
        })
    }
    return writer
    }