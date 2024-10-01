import React from "react";

const GroupTable = ({ groupNumber, table, groupId }) => {
  return (
    <div>
      <h3>Group {groupNumber}</h3>
      <p>Table: {table}</p>
      <table className="group-table">
        <thead>
          <tr>
            <th className="table-header">Players</th>
            <th className="table-header" colSpan="4">
              Results
            </th>
            <th className="table-header">Points</th>
            <th className="table-header">Places</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="table-cell">Player {rowIndex + 1}</td>
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
