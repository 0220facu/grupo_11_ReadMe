module.exports = (sequelize, DataTypes) => {
    const alias= 'editorial'
    
    const columns ={
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    name : DataTypes.STRING
    }
    
    const config = {
        tableName: "editorials",
        timestamps: false
    }
    
    const editorial = sequelize.define(
        alias,
        columns,
        config
      );
    editorial.associate = (models)=> {
        editorial.hasMany(models.book,{
        as : 'books',
        foreingKey : 'editorial_id'
        })
    }
    return editorial
    }