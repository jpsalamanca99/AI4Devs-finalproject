export const getConnectionSettings = () => {
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const database = process.env.DB_NAME;
  const username = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  return {
    host,
    port,
    database,
    username,
    password,
  };
};
