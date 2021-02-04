module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      username: DataTypes.STRING,
      location: DataTypes.STRING,
      age: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    return user;
  };
  