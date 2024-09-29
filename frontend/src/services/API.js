import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:4000/api";

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

export { authenticateOrganizer, tournamentList, playerList };
