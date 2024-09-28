import React from "react";
import GroupTable from "../atoms/GroupTable";
import TabHolder from "../atoms/TabHolder";

const GroupsTab = () => {

  const tabs = [
    {
      label: "Group 1",
      content: GroupTable,
      args: { table: "1", name: "Group 1" },
    },
    {
      label: "Group 2",
      content: GroupTable,
      args: { table: "2", name: "Group 2" },
    },
    {
      label: "Group 3",
      content: GroupTable,
      args: { table: "3", name: "Group 3" },
    },
  ];

  return (
    <div>
      <TabHolder tabs={tabs}/>
    </div>
  );
};

export default GroupsTab;
