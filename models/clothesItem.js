module.exports = function(sequelize, Sequelize) {
    var ClothesItem = sequelize.define("ClothesItem", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true,
            len: [0, 400]
        },


        itemType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        img: {
            type: Sequelize.BLOB,
            allowNull: false
        },

        size: {
            type: Sequelize.STRING,
            allowNull: false
        },

        availability: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },





    });
    return Example;

};