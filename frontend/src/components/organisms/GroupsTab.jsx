import React, { useState, useEffect } from "react";
import GroupTable from "../atoms/GroupTable";
import TabHolder from "../atoms/TabHolder";
import { groupsList } from "@/services/API";

const GroupsTab = ({ tournamentId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      console.log(tournamentId);
      try {
        const response = await groupsList({ tournamentId });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.data;
        setTabs(
          data.map((g) => {
            return {
              label: `Group ${g.group_number}`,
              content: GroupTable,
              args: {
                groupNumber: g.group_number,
                table: g.table,
                groupId: g.id,
              },
            };
          })
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (tournamentId) fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <TabHolder tabs={tabs} />
    </div>
  );
};

export default GroupsTab;
