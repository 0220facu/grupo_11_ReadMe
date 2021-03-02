module.exports = (sequelize, DataTypes) => {
const alias= 'category'

const columns ={
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
name : DataTypes.STRING
}

const config = {
    tableName: "categories",
    timestamps: false
}

const category = sequelize.define(
    alias,
    columns,
    config
  );
category.associate = (models)=> {
    category.hasMany(models.book,{
    as : 'books',
    foreingKey : 'category_id'
    })

    category.belongsToMany(models.category, {
        as: 'users',
        through: 'interests_user',
        otherKey: 'user_id',
        foreignKey: 'category_id',
    })
}
return category
}