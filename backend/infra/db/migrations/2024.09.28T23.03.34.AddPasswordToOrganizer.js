import { DataTypes } from "sequelize";

export const up = async ({ sequelize }) => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addColumn(
      "Organizers",
      "password",  // New column name
      {
        type: DataTypes.STRING,
        allowNull: false,  // Set to false if you want to enforce that every organizer must have a password
      },
      { transaction }
    );
  });
};

export const down = async ({ sequelize }) => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeColumn("Organizers", "password", { transaction });
  });
};
