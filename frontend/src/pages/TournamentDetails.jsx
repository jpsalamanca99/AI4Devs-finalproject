import TabHolder from "@/components/atoms/TabHolder";
import GroupsTab from "@/components/organisms/GroupsTab";
import PlayersTab from "@/components/organisms/PlayersTab";
import { tournamentInfo } from "@/services/API";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const TournamentDetails = () => {
  const router = useRouter();
  const [nid, setNid] = useState();
  const [tournamentId, setTournamentId] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setNid(router.query.nid);
    setTournamentId(router.query.tournamentId);
  }, [router.query]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await tournamentInfo({ tournamentId });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.data;
        setDate(data.date);
        setName(data.name);
        setTabs([
          {
            label: "Groups",
            content: GroupsTab,
            args: { tournamentId },
          },
          {
            label: "Players",
            content: PlayersTab,
            args: { tournamentId },
          }
        ]);
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
    <div className="tournament-details-container">
      <h1 className="tournament-title">Tournament details</h1>
      <h2 className="tournament-title">{name}</h2>
      <p className="tournament-date">Date: {date}</p>

      <TabHolder tabs={tabs} />
    </div>
  );
};

export default TournamentDetails;
