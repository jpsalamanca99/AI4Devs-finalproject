import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Player extends Model {
    static associate(models) {
      Player.belongsToMany(models.Tournament, { through: 'TournamentPlayers' });
      Player.belongsToMany(models.Group, { through: 'GroupPlayers' });
      Player.hasMany(models.Match, { as: 'PlayerA', foreignKey: 'playerAId' });
      Player.hasMany(models.Match, { as: 'PlayerB', foreignKey: 'playerBId' });
    }
  }

  Player.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Player',
  });

  return Player;
};
