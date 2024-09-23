import { Sequelize } from 'sequelize';
import Organizer from './organizer.js';
import Tournament from './tournament.js';
import Group from './group.js';
import Bracket from './bracket.js';
import Player from './player.js';
import Match from './match.js';
import { getConnectionString } from './config.js';

let context;

const build = (sequelize) => {
  const models = {
    Organizer: Organizer(sequelize),
    Tournament: Tournament(sequelize),
    Group: Group(sequelize),
    Bracket: Bracket(sequelize),
    Player: Player(sequelize),
    Match: Match(sequelize),
  };
  
  Object.values(models).forEach(model => {
    if (model.associate) {
      model.associate(models);
    }
  });
}

const getContext = async () => {
  if (!context) {
    const connectionString = await getConnectionString();
    const { database, host, user, password, port } = parse(connectionString);
    const sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect: 'postgres',
      logging: detail => logger.debug({ message: 'Sequelize', detail }),
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
