import React from "react";
import StaticList from "../atoms/StaticList";

const PlayerList = ({ players }) => {
  return (
    <div>
      <StaticList items={players} mainProperty={"name"} />
    </div>
  );
};

export default PlayerList;
