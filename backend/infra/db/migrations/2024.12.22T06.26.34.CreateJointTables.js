import { DataTypes } from "sequelize";

export const up = async ({ sequelize }) => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    // Create GroupMatches junction table
    await queryInterface.createTable(
      "GroupMatches",
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
        matchId: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          unique: true, // Ensures one match can only belong to one group
          references: {
            model: "Matches",
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

    // Create BracketMatches junction table
    await queryInterface.createTable(
      "BracketMatches",
      {
        bracketId: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "Brackets",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        matchId: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          unique: true, // Ensures one match can only belong to one bracket
          references: {
            model: "Matches",
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
    await queryInterface.dropTable("BracketMatches", { transaction });
    await queryInterface.dropTable("GroupMatches", { transaction });
  });
}
