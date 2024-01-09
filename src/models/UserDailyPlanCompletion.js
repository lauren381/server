const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return UserDailyPlanCompletion.init(sequelize, DataTypes);
}

class UserDailyPlanCompletion extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    completion_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    detail_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'DailyPlanDetails',
        key: 'detail_id'
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'UserDailyPlanCompletion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "completion_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "detail_id",
        using: "BTREE",
        fields: [
          { name: "detail_id" },
        ]
      },
    ]
  });
  }
}
