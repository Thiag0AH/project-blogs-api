const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTERGER,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });
    return User;
}

module.exports = UserModel;