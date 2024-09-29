import StaticList from "@/components/atoms/StaticList";
import TabHolder from "@/components/atoms/TabHolder";
import GroupsTab from "@/components/organisms/GroupsTab";
import React, { useState } from "react";

const TournamentDetails = () => {
  const [playerList, setPlayerList] = useState(["P1", "P2", "P3"]);

  const tabs = [
    {
      label: "Groups",
      content: GroupsTab,
      args: {},
    },
    { label: "Brackets", content: (args) => "Brackets" },
    {
      label: "Players",
      content: StaticList,
      args: { title: "Players", items: playerList },
    },
  ];

  return (
    <div>
      <h1>Tournament details</h1>
      <h2>Subtitle</h2>
      <p>Date: </p>

      <TabHolder tabs={tabs} />
    </div>
  );
};

export default TournamentDetails;
