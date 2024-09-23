import { Sequelize } from "sequelize";
import Organizer from "./models/organizer.js";
import Tournament from "./models/tournament.js";
import Group from "./models/group.js";
import Bracket from "./models/bracket.js";
import Player from "./models/player.js";
import Match from "./models/match.js";
import TournamentPlayer from "./models/tournamentPlayers.js";
import GroupPlayer from "./models/groupPlayers.js";
import { getConnectionString } from "./config.js";

import pkg from "pg-connection-string";

let context;
const { parse } = pkg;

const build = (sequelize) => {
  const models = {
    Organizer: Organizer(sequelize),
    Tournament: Tournament(sequelize),
    Group: Group(sequelize),
    Bracket: Bracket(sequelize),
    Player: Player(sequelize),
    Match: Match(sequelize),
    TournamentPlayer: TournamentPlayer(sequelize),
    GroupPlayer: GroupPlayer(sequelize)
  };

  Object.values(models).forEach((model) => {
    if (model.associate) {
      model.associate(models);
    }
  });

  return models;
};

const getContext = async () => {
  if (!context) {
    const connectionString = await getConnectionString();
    const { database, host, user, password, port } = parse(connectionString);
    const sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect: "postgres",
      logging: (detail) => console.log({ message: "Sequelize", detail }),
    });
    const models = build(sequelize);
    context = {
      sequelize,
      ...models,
    };
  }

  return context;
};

export { getContext };
