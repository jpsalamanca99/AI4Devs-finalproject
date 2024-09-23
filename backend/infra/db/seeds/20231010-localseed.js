import { v4 as uuidv4 } from "uuid";

export const up = async ({ sequelize }) => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.bulkInsert(
      "Organizers",
      [
        {
          id: uuidv4(),
          name: "Organizer 1",
          nid: "NID001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Organizer 2",
          nid: "NID002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { transaction }
    );

    // Create 80 Players
    const players = [];
    for (let i = 1; i <= 80; i++) {
      players.push({
        id: uuidv4(),
        name: `Player ${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Players", players, { transaction });
  });
};

export const down = async ({ sequelize }) => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.bulkDelete("Players", null, {transaction});
    await queryInterface.bulkDelete("Organizers", null, {transaction});
  });
};
