module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define("ClothesItem", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            zipcode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,

            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            lastname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },









    });
return Example;
};