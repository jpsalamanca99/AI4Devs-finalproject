import { Umzug, SequelizeStorage } from "umzug";
import { getConnectionSettings } from "./config.js";
import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";
import pkg from "pg-connection-string";

const { parse } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { host, port, database, username, password } = getConnectionSettings();
const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: "postgres",
  migrationStoragePath: "./migrations",
});

const seedUmzug = new Umzug({
  migrations: {
    glob: ["./seeds/*.js", { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
      const getModule = () => import(`file:///${path.replace(/\\/g, "/")}`);
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
    modelName: "SequelizeMetaSeeds",
  }),
  logger: console,
});

seedUmzug.runAsCLI();
