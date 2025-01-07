import React, { useState, useEffect } from "react";

const MatchDetail = () => {
    return (
        <div className="match-detail-container">
            <table className="match-detail-table">
                <tbody>
                    {/* First Player Section */}
                    <tr className="match-row">
                        <td className="player-cell">Player 1 Name</td>
                        <td className="score-cell"></td>
                        <td className="score-cell"></td>
                        <td className="stats-cell">Player 2 Name</td>
                    </tr>
                    <tr className="match-row">
                        <td className="player-cell player-cell-sub"></td>
                        <td className="score-cell score-cell-sub">0</td>
                        <td className="score-cell score-cell-sub">0</td>
                        <td className="stats-cell stats-cell-sub"></td>
                    </tr>

                    {/* Second Player Section */}
                    <tr className="match-row">
                        <td className="player-cell"></td>
                        <td className="score-cell">0</td>
                        <td className="score-cell">0</td>
                        <td className="stats-cell"></td>
                    </tr>
                    <tr className="match-row">
                        <td className="player-cell player-cell-sub"></td>
                        <td className="score-cell score-cell-sub">0</td>
                        <td className="score-cell score-cell-sub">0</td>
                        <td className="stats-cell stats-cell-sub"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MatchDetail;