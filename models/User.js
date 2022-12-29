module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.SMALLINT.UNSIGNED,
      },
    },
    {
      sequelize,
      modelName: "user",
    },
  );

  return User;
};
