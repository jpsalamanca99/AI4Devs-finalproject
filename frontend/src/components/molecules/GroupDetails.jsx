import React from "react";
import GroupTable from "../atoms/GroupTable";
import MatchDetail from "../atoms/MatchDetail";

const GroupDetails = ({ groupNumber, table, groupId }) => {
  return (
    <div className="group-details-container">
      <GroupTable groupNumber={groupNumber} table={table} groupId={groupId}/>
      <MatchDetail />
    </div>
  );
};

export default GroupDetails;
