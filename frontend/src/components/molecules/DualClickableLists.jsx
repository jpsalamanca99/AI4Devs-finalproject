import React, { useState, useEffect } from "react";
import ClickableList from "../atoms/ClickableList.jsx";

const DualClickableLists = ({
  labelOne,
  labelTwo,
  firstItemsSet = [],
  secondItemsSet = [],
  mainProperty,
  getListOne,
  getListTwo,
}) => {
  const [listOne, setListOne] = useState(firstItemsSet);
  const [listTwo, setListTwo] = useState(secondItemsSet);

  useEffect(() => {
    if (getListOne) {
      getListTwo(listOne);
    }
  }, [listOne, setListOne]);

  useEffect(() => {
    if (getListTwo) {
      getListTwo(listTwo);
    }
  }, [listTwo, getListTwo]);


  const handleItemClick = (item, fromList) => {
    if (fromList === "listOne") {
      setListOne(listOne.filter((i) => i !== item));
      setListTwo([...listTwo, item]);
    } else {
      setListTwo(listTwo.filter((i) => i !== item));
      setListOne([...listOne, item]);
    }
  };

  return (
    <div className="dual-clickable-lists"> {/* Added class for styling */}
      <ClickableList
        title={labelOne}
        items={listOne}
        onItemClick={(item) => handleItemClick(item, "listOne")}
        mainProperty={mainProperty}
      />
      <ClickableList
        title={labelTwo}
        items={listTwo}
        onItemClick={(item) => handleItemClick(item, "listTwo")}
        mainProperty={mainProperty}
      />
    </div>
  );
};

export default DualClickableLists;
