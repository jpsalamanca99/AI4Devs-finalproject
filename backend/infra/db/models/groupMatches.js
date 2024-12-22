import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class GroupMatch extends Model {
    static associate(models) {
      // Associations are defined in Group and Match models
    }
  }

  GroupMatch.init({
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Groups',
        key: 'id',
      }
    },
    matchId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true, // Ensures one match can only belong to one group
      references: {
        model: 'Matches',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'GroupMatch',
    timestamps: false,
    tableName: 'GroupMatches',
  });

  return GroupMatch;
};
