import React, { useState, useEffect } from "react";
import { bracketList } from "@/services/API";
import TournamentBracket from '@/components/molecules/TournamentBrackets';

const BracketsTab = ({ tournamentId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await bracketList({ tournamentId });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.data;

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
      <TournamentBracket />
    </div>
  );
};

export default BracketsTab;
