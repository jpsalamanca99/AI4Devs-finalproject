import { groupsInfo } from "@/services/API";
import React, { useState, useEffect } from "react";

const GroupTable = ({ groupNumber, table, groupId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupPlayers, setGroupPlayers] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await groupsInfo({ groupId });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.data;
        setGroupPlayers(data.Players);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (groupId) fetchItems();
  }, [groupId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Group {groupNumber}</h3>
      <p>Table: {table}</p>
      <table className="group-table">
        <thead>
          <tr>
            <th className="table-header">Players</th>
            <th className="table-header" colSpan="4">Results</th>
            <th className="table-header">Points</th>
            <th className="table-header">Places</th>
          </tr>
        </thead>
        <tbody>
          {groupPlayers.map((player, rowIndex) => (
            <tr key={player.id}>
              <td className="table-cell">{player.name}</td>
              <td className="table-cell">Result {rowIndex + 1}</td>
              <td className="table-cell">Result {rowIndex + 1}</td>
              <td className="table-cell">Result {rowIndex + 1}</td>
              <td className="table-cell">Result {rowIndex + 1}</td>
              <td className="table-cell">Points {rowIndex + 1}</td>
              <td className="table-cell">Place {rowIndex + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupTable;
