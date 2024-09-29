import { Umzug, SequelizeStorage } from 'umzug';
import { getConnectionString } from './config.js';
import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg-connection-string';

const { parse } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectionString = getConnectionString();
const { database, host, user, password, port } = parse(connectionString);
console.log(database);
console.log(host);
console.log(user);
console.log(password);
console.log(port);
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  migrationStoragePath: './migrations'
});
const umzug = new Umzug({
  migrations: {
    glob: ['./migrations/*.js', { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
      const getModule = () => import(`file:///${path.replace(/\\/g, '/')}`);
      return {
        name,
        up: async () => (await getModule()).up(context),
        down: async () => (await getModule()).down(context),
      };
    },
  },
  context: { sequelize },
  storage: new SequelizeStorage({
    sequelize: sequelize,
  }),
  logger: console,
});

umzug.runAsCLI();