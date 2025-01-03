import React, { useEffect, useState } from "react";

const TournamentBracket = ({ brackets }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const orderItems = async () => {
      try {
        console.log(brackets);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (brackets) orderItems();
  }, [brackets]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && data.length === 0) {
    return <div>The brackets are not defined yet</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="tournament-bracket">
      {/* Round of 16 */}
      <div className="round round-16">
        <div className="match">
          <div className="player">Player 1</div>
          <div className="player">Player 2</div>
        </div>
        <div className="match">
          <div className="player">Player 3</div>
          <div className="player">Player 4</div>
        </div>
        <div className="match">
          <div className="player">Player 5</div>
          <div className="player">Player 6</div>
        </div>
        <div className="match">
          <div className="player">Player 7</div>
          <div className="player">Player 8</div>
        </div>
        <div className="match">
          <div className="player">Player 9</div>
          <div className="player">Player 10</div>
        </div>
        <div className="match">
          <div className="player">Player 11</div>
          <div className="player">Player 12</div>
        </div>
        <div className="match">
          <div className="player">Player 13</div>
          <div className="player">Player 14</div>
        </div>
        <div className="match">
          <div className="player">Player 15</div>
          <div className="player">Player 16</div>
        </div>
      </div>

      {/* Quarter Finals */}
      <div className="round round-8">
        <div className="match">
          <div className="player">Winner 1-2</div>
          <div className="player">Winner 3-4</div>
        </div>
        <div className="match">
          <div className="player">Winner 5-6</div>
          <div className="player">Winner 7-8</div>
        </div>
        <div className="match">
          <div className="player">Winner 9-10</div>
          <div className="player">Winner 11-12</div>
        </div>
        <div className="match">
          <div className="player">Winner 13-14</div>
          <div className="player">Winner 15-16</div>
        </div>
      </div>

      {/* Semi Finals */}
      <div className="round round-4">
        <div className="match">
          <div className="player">Quarter Winner 1</div>
          <div className="player">Quarter Winner 2</div>
        </div>
        <div className="match">
          <div className="player">Quarter Winner 3</div>
          <div className="player">Quarter Winner 4</div>
        </div>
      </div>

      {/* Finals */}
      <div className="round round-2">
        <div className="match">
          <div className="player">Semi Winner 1</div>
          <div className="player">Semi Winner 2</div>
        </div>
      </div>
    </div>
  );
};

export default TournamentBracket;
