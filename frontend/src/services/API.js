import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api";

const authenticateOrganizer = async ({ nid, password }) => {
  return await axios.post(
    `${API_BASE_URL}/organizers/authenticate/`,
    { nid, password },
    { withCredentials: true }
  );
};

const tournamentList = async ({ nid }) => {
  return await axios.get(
    `${API_BASE_URL}/tournaments/`,
    { params: { organizerNid: nid } },
    { withCredentials: true }
  );
};

const playerList = async () => {
  return await axios.get(
    `${API_BASE_URL}/players/`,
    {},
    { withCredentials: true }
  );
};

const tournamentCreator = async ({ name, date, playerIds, nid }) => {
  return await axios.post(
    `${API_BASE_URL}/tournaments/`,
    { nid, name, date, playerIds },
    { withCredentials: true }
  );
};

export { authenticateOrganizer, tournamentList, playerList, tournamentCreator };
