import React, { useState, useEffect } from "react";
import DualClickableLists from "../components/molecules/DualClickableLists.jsx";
import SubmitButton from "../components/atoms/SubmitButton.jsx";
import TextInput from "@/components/atoms/TextInput.jsx";
import { playerList } from "../services/API.js";

const CreateTournament = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [players, setPlayers] = useState([]);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="create-tournament-container">
      {" "}
      {/* Added class for styling */}
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
      <div className="dual-clickable-lists-container">
        {" "}
        {/* Added wrapper for styling */}
        <DualClickableLists
          labelOne={"Available players"}
          labelTwo={"Registered players"}
          firstItemsSet={players}
          mainProperty={"name"}
        />
      </div>
      <SubmitButton label="Submit" />
    </div>
  );
};

export default CreateTournament;
