import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Organizer extends Model {
    static associate(models) {
      Organizer.hasMany(models.Tournament, { foreignKey: 'organizerId' });
    }
  }

  Organizer.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Organizer',
  });

  return Organizer;
};
