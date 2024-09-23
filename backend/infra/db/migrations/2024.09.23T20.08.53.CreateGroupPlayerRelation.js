import { DataTypes } from "sequelize";

export const up = async ({ sequelize }) => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.createTable(
      "GroupPlayers",
      {
        groupId: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "Groups",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        playerId: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "Players",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      { 
        transaction,
        timestamps: false,
      }
    );
  });
};

export async function down({ sequelize }) {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.dropTable("GroupPlayers", { transaction });
  });
}