import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class GroupPlayer extends Model {
    static associate(models) {
      // Associations are defined in Group and Player models
    }
  }

  GroupPlayer.init({
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Groups',
        key: 'id',
      }
    },
    playerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Players',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'GroupPlayer',
    timestamps: false,
    tableName: 'GroupPlayers',
    noPrimaryKey: true,
  });

  return GroupPlayer;
};
