import React, { useState, useEffect } from "react";
import DualClickableLists from "../components/molecules/DualClickableLists.jsx";
import SubmitButton from "../components/atoms/SubmitButton.jsx";
import TextInput from "@/components/atoms/TextInput.jsx";
import { playerList, tournamentCreator } from "../services/API.js";
import { useRouter } from "next/router";

const CreateTournament = () => {
  const router = useRouter();
  const [nid, setNid] = useState(router.query.nid);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [players, setPlayers] = useState([]);
  const [registeredPlayers, setRegisteredPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const { data } = await playerList();
        setPlayers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  const handleRegisteredPlayersChange = (items) => {
    setRegisteredPlayers(items);
  };

  const handleOnClickSubmit = async () => {
    if (registeredPlayers.length < 64) {
      alert("Not enough players to create a tournament");
      return;
    }
    if (registeredPlayers.length > 64) {
      alert("Too many players to create a tournament");
      return;
    }
    try {
      const playerIds = registeredPlayers.map((e) => e.id);
      const response = await tournamentCreator({
        name,
        date,
        playerIds,
        nid,
      });
      const newTournamentId = response.data.id;
      await groupsCreator({ tournamentId: newTournamentId });
      if (response.status === 201) {
        router.push({
          pathname: "/TournamentList",
          query: { nid },
        });
      } else {
        alert("Creation failed", response.data.message);
      }
    } catch (error) {
      alert("Error during creation:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="create-tournament-container">
      <h1>Create Tournament</h1>
      <p>Name</p>
      <TextInput
        placeholder={"Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Date</p>
      <TextInput
        placeholder={"Date"}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <p>Select 64 players</p>
      <div className="dual-clickable-lists-container">
        <DualClickableLists
          labelOne={"Available players"}
          labelTwo={"Registered players"}
          firstItemsSet={players}
          mainProperty={"name"}
          getListTwo={handleRegisteredPlayersChange}
        />
      </div>
      <SubmitButton label="Submit" onClick={handleOnClickSubmit} />
    </div>
  );
};

export default CreateTournament;
