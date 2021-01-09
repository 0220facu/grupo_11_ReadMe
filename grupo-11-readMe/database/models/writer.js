module.exports = (sequelize, DataTypes) => {
    const alias= 'writer'
    
    const columns ={
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    name : DataTypes.STRING
    }
    
    const config = {
        tableName: "writers",
        timestamps: false
    }
    
    const writer = sequelize.define(
        alias,
        columns,
        config
      );

    writer.associate = (models)=> {
        writer.hasMany(models.book,{
        as : 'books',
        foreingKey : 'writer_id'
        })
    }
    return writer
    }