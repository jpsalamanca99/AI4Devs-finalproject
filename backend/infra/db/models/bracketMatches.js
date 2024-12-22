import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class BracketMatch extends Model {
    static associate(models) {
      // Associations are defined in Bracket and Match models
    }
  }

  BracketMatch.init({
    bracketId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Brackets',
        key: 'id',
      }
    },
    matchId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true, // Ensures one match can only belong to one bracket
      references: {
        model: 'Matches',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'BracketMatch',
    timestamps: false,
    tableName: 'BracketMatches',
  });

  return BracketMatch;
}; 