import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsTo(models.Tournament, { foreignKey: "tournamentId" });
      Group.belongsToMany(models.Player, {
        through: "GroupPlayers",
        foreignKey: "groupId",
        otherKey: "playerId",
      });
      Group.belongsToMany(models.Match, {
        through: 'GroupMatches',
        foreignKey: 'groupId',
        otherKey: 'matchId',
      });
    }
  }

  Group.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      group_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      table: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Group",
    }
  );

  return Group;
};
