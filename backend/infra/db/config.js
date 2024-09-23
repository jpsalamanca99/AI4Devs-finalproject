export const getConnectionString = () => {
  const host = process.env.DB_HOST;
  const database = process.env.DB_NAME;
  const username = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  return `posgresql://${username}:${password}@${host}/${database}`;
};
