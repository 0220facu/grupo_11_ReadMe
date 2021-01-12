module.exports = (sequelize, DataTypes) => {
const alias = 'user'

const columns ={
    name : DataTypes.STRING,
    birth_date : DataTypes.DATE,
    adress : DataTypes.STRING,
    image : DataTypes.STRING,
    email : DataTypes.STRING,
    username : DataTypes.STRING,
    password : DataTypes.STRING
}

const config = {
    tableName: "users",
    timestamps: false
}

const user = sequelize.define(
    alias,
    columns,
    config
  );
user.associate  = (models) => {
user.belongsToMany(models.category, {
    as: 'categories',
    through: 'interests_user',
    otherKey: 'category_id',
    foreignKey: 'user_id',
})
}
return user
}
