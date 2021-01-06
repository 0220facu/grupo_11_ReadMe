module.exports = (sequelize, DataTypes) => {
const alias= 'category'

const colums ={
name = DataTypes.STRING
}

const config = {
    tableName: "categories",
    timestamps: false
}

category.associate = (models)=> {
    category.hasMany(models.book,{
    as = 'books',
    foreingKey = 'book_id'
    })
}
return category
}