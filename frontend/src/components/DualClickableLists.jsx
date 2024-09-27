import React, { useState } from "react";
import ClickableList from "./ClickableList.jsx";

const DualClickableLists = () => {
  const [listOneItems, setListOneItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);
  const [listTwoItems, setListTwoItems] = useState([]);

  const handleItemClick = (item, fromList) => {
    if (fromList === "listOne") {
      setListOneItems(listOneItems.filter((i) => i !== item));
      setListTwoItems([...listTwoItems, item]);
    } else {
      setListTwoItems(listTwoItems.filter((i) => i !== item));
      setListOneItems([...listOneItems, item]);
    }
  };

  return (
    <div>
      <ClickableList
        title="List One"
        items={listOneItems}
        onItemClick={(item) => handleItemClick(item, "listOne")}
      />
      <ClickableList
        title="List Two"
        items={listTwoItems}
        onItemClick={(item) => handleItemClick(item, "listTwo")}
      />
    </div>
  );
};

export default DualClickableLists;
