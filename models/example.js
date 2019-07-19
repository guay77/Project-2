module.exports = function(sequelize, DataTypes) {
    var userTable = sequelize.define("tableItems", {
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
            type: Sequelize.Boolean,
            allowNull: false
        },

        time: {
            type: Sequelize.TIMESTAMP,
            allowNull: false
        },

        email: {
            type: Sequelize.string,
            allowNull: false
        },

        address: {
            type: Sequelize.string,
            allowNull: false
        },

        firstName: {
            type: Sequelize.string,
            allowNull: false
        },

        lastName: {
            type: Sequelize.string,
            allowNull: false
        },

        city: {
            type: Sequelize.string,
            allowNull: false
        },

        state: {
            type: Sequelize.string,
            allowNull: false
        },
        zipCode: {
            type: Sequelize.string,
            allowNull: false
        },






    });

    return Example;
};