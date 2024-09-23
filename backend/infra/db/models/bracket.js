import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Bracket extends Model {
    static associate(models) {
      Bracket.belongsTo(models.Tournament, { foreignKey: 'tournamentId' });
    }
  }

  Bracket.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    stage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Bracket',
  });

  return Bracket;
};
