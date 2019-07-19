module.exports = function(sequelize, Sequelize) {
    var Loan = sequelize.define("ClothesItem", {
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

        email: {
            type: Sequelize.STRING,
            allowNull: false
        },

        address: {
            type: Sequelize.STRING
            allowNull: false
        }





    });
    return Example;
};

Loan = this.sequelize.define('Loan', { /* attributes */ }), User = this.sequelize.define('user', { /* attributes */ });

Loan.belongsTo(User); // Will add companyId to user

var Loan = this.sequelize.define('user', { /* attributes */ }, { underscored: true }),
    User = this.sequelize.define('user', {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true
        }
    });

Loan.belongsTo(User);