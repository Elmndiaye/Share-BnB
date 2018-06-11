module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Host", {
        owner_id: DataTypes.INTEGER,
        description: DataTypes.STRING,
        img_url_1: DataTypes.STRING,
        img_url_2: DataTypes.STRING,
        img_url_3: DataTypes.STRING,
        img_url_4: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        booked_from: DataTypes.DATE,
        booked_to: DataTypes.DATE,
        price_per_day: DataTypes.INTEGER,
        price_per_week: DataTypes.INTEGER,
        price_per_month: DataTypes.INTEGER
    });
    return Host;
}

