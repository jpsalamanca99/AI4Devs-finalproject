import React from "react";

const ClickableList = ({ title, items, onItemClick, mainProperty }) => {
  return (
    <div className="scrollable-list-container">
      <h2 className="text-primary">{title}</h2>
      <p>{items.length} items</p>
      <ul className="list">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-item"
            onClick={() => onItemClick(item)}
          >
            {mainProperty ? item[mainProperty] : item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClickableList;
