import { DataTypes } from "sequelize";

export const up = async ({ sequelize }) => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.createTable(
      "Organizers",
      {
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
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
      },
      { transaction }
    );

    await queryInterface.createTable(
      "Tournaments",
      {
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
        organizerId: {
          type: DataTypes.UUID,
          references: {
            model: "Organizers",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
      },
      { transaction }
    );

    await queryInterface.createTable(
      "Groups",
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
        tournamentId: {
          type: DataTypes.UUID,
          references: {
            model: "Tournaments",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
      },
      { transaction }
    );

    await queryInterface.createTable(
      "Brackets",
      {
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
        tournamentId: {
          type: DataTypes.UUID,
          references: {
            model: "Tournaments",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
      },
      { transaction }
    );

    await queryInterface.createTable(
      "Players",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
      },
      { transaction }
    );

    await queryInterface.createTable(
      "Matches",
      {
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
        playerAId: {
          type: DataTypes.UUID,
          references: {
            model: "Players",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        playerBId: {
          type: DataTypes.UUID,
          references: {
            model: "Players",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
      },
      { transaction }
    );

    await queryInterface.createTable(
      "TournamentPlayers",
      {
        tournamentId: {
          type: DataTypes.UUID,
          references: {
            model: "Tournaments",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        playerId: {
          type: DataTypes.UUID,
          references: {
            model: "Players",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.fn("NOW"),
        },
      },
      { transaction }
    );
  });
};

export async function down({ sequelize }) {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.dropTable("TournamentPlayers", { transaction });
    await queryInterface.dropTable("Matches", { transaction });
    await queryInterface.dropTable("Players", { transaction });
    await queryInterface.dropTable("Brackets", { transaction });
    await queryInterface.dropTable("Groups", { transaction });
    await queryInterface.dropTable("Tournaments", { transaction });
    await queryInterface.dropTable("Organizers", { transaction });
  });
}
