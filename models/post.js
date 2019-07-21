module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        size: DataTypes.STRING,
        type: DataTypes.STRING,
        desctiption: DataTypes.TEXT,
        available: DataTypes.BOOLEAN
    });
    return Post;
};