import React, { useState } from "react";
import ClickableList from "../atoms/ClickableList.jsx";

const DualClickableLists = ({
  labelOne,
  labelTwo,
  firstItemsSet = [],
  secondItemsSet = [],
  mainProperty
}) => {
  const [listOneItems, setListOneItems] = useState(firstItemsSet);
  const [listTwoItems, setListTwoItems] = useState(secondItemsSet);

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
    <div className="dual-clickable-lists"> {/* Added class for styling */}
      <ClickableList
        title={labelOne}
        items={listOneItems}
        onItemClick={(item) => handleItemClick(item, "listOne")}
        mainProperty={mainProperty}
      />
      <ClickableList
        title={labelTwo}
        items={listTwoItems}
        onItemClick={(item) => handleItemClick(item, "listTwo")}
        mainProperty={mainProperty}
      />
    </div>
  );
};

export default DualClickableLists;
