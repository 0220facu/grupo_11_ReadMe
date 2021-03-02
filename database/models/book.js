module.exports = (sequelize, DataTypes) => {

    const alias = 'book'

const columns ={
    name : DataTypes.STRING,
    year : DataTypes.INTEGER,
    price : DataTypes.DECIMAL,
    language : DataTypes.STRING,
    synopsis : DataTypes.TEXT,
    pages : DataTypes.INTEGER,
    famous : DataTypes.INTEGER,
    image : DataTypes.STRING,
    editorial_id : DataTypes.INTEGER,
    category_id  : DataTypes.INTEGER,
    writer_id : DataTypes.INTEGER,
}

const config = {
    tablename: "books",
   
    
  }
  const book = sequelize.define(
    alias,
    columns,
    config
  );

  book.associate = (models) =>{
     book.belongsTo(models.editorial,{
         as: 'editorial',
        foreignKey: 'editorial_id'
     })

     book.belongsTo(models.category,{
        as: 'category',
       foreignKey: 'category_id'
    })

    book.belongsTo(models.writer,{
        as: 'writer',
       foreignKey: 'writer_id'
    })
  }
return book;
}