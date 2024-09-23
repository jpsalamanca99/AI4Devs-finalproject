import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Tournament extends Model {
    static associate(models) {
      Tournament.belongsTo(models.Organizer, { foreignKey: 'organizerId' });
      Tournament.hasMany(models.Group, { foreignKey: 'tournamentId' });
      Tournament.hasMany(models.Bracket, { foreignKey: 'tournamentId' });
      Tournament.belongsToMany(models.Player, { through: 'TournamentPlayers' });
    }
  }

  Tournament.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Tournament',
  });

  return Tournament;
};
