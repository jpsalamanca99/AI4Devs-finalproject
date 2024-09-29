import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ClickableList from "../components/atoms/ClickableList.jsx";
import PlusButton from "@/components/atoms/PlusButton.jsx";
import { tournamentList } from "@/services/API.js";

const TournamentList = () => {
  const router = useRouter();
  const [nid, setNid] = useState(router.query.nid);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await tournamentList({ nid });
        
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.data;
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [nid]);

  const handleItemClick = (item) => {
    alert(`You clicked on ${item}`);
  };

  const handleButtonClick = () => {
    router.push({
      pathname: "/CreateTournament",
      query: { nid },
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="tournament-list-container">
      <h1>Tournaments</h1>
      <ClickableList
        title="Tournaments"
        items={items}
        onItemClick={handleItemClick}
        mainProperty={'name'}
      />
      <PlusButton onClick={handleButtonClick} />
    </div>
  );
};

export default TournamentList;
