import React, { useEffect, useState } from 'react';
import ClickableList from '../components/atoms/ClickableList.jsx';
import PlusButton from '@/components/atoms/PlusButton.jsx';


const TournamentList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      // const fetchItems = async () => {
      //     try {
      //         const response = await fetch('https://api.example.com/items'); // Replace with your API endpoint
      //         if (!response.ok) {
      //             throw new Error('Network response was not ok');
      //         }
      //         const data = await response.json();
      //         setItems(data); // Assuming the API returns an array of items
      //     } catch (error) {
      //         setError(error.message);
      //     } finally {
      //         setLoading(false);
      //     }
      // };
      const fetchItems = () => {
        setItems(["Miercoles", "Viernes", "Ranking"]);
        setLoading(false);
      }

      fetchItems();
  }, []);

  const handleItemClick = (item) => {
      alert(`You clicked on ${item}`);
  };

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Tournaments</h1>
      <ClickableList
          title="Tournaments"
          items={items}
          onItemClick={handleItemClick}
      />
      <PlusButton/>
    </div>
);
};

export default TournamentList;
