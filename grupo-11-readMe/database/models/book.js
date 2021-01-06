module.exports = (sequelize, DataTypes) => {

    const alias = 'book'

const columns ={
    name = DataTypes.STRING,
    year = datatypes.INTEGER,
    price = datatypes.INTEGER,
    language = datatypes.STRING,
    synopsis = datatypes.STRING,
    pages = datatypes.INTEGER,
    famous = datatypes.INTEGER,
    image = datatypes.STRING,
    editorial_id = datatypes.INTEGER,
    category_id  = datatypes.INTEGER,
    writer_id = datatypes.INTEGER,

}

const config = {
    tablename: "books",
    timestamps: true
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