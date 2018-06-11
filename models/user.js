module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        email: DataTypes.STRING,
        address_street: DataTypes.STRING,
        address_city: DataTypes.STRING,
        address_state: DataTypes.STRING,
        address_zip: DataTypes.INTEGER,
        country: DataTypes.STRING
    });
    return User;
}

