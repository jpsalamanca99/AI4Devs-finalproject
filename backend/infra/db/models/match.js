import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Match extends Model {
    static associate(models) {
      Match.belongsTo(models.Player, { as: 'PlayerA', foreignKey: 'playerAId' });
      Match.belongsTo(models.Player, { as: 'PlayerB', foreignKey: 'playerBId' });
      Match.belongsToMany(models.Group, {
        through: 'GroupMatches',
        foreignKey: 'matchId',
        otherKey: 'groupId',
      });
      Match.belongsToMany(models.Bracket, {
        through: 'BracketMatches',
        foreignKey: 'matchId',
        otherKey: 'bracketId',
      });
    }
  }

  Match.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    player_a_set_one: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    player_a_set_two: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    player_a_set_three: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    player_b_set_one: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    player_b_set_two: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    player_b_set_three: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Match',
  });

  return Match;
};
