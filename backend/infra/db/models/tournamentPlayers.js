import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class TournamentPlayer extends Model {
    static associate(models) {
      // No additional associations needed here
    }
  }

  TournamentPlayer.init({
    tournamentId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Tournaments',
        key: 'id',
      },
    },
    playerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Players',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'TournamentPlayer',
    timestamps: false,
    tableName: 'TournamentPlayers',
    noPrimaryKey: true,
  });

  return TournamentPlayer;
};
