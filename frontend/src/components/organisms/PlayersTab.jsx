import React, { useState, useEffect } from "react";
import PlayerList from "../molecules/PlayerList";
import { tournamentPlayers } from "@/services/API";

const PlayersTab = ({ tournamentId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await tournamentPlayers({ tournamentId });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.data;

        setPlayers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (tournamentId) fetchItems();
  }, [tournamentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="groups-tab-container">
      <PlayerList players={players} />
    </div>
  );
};

export default PlayersTab;
