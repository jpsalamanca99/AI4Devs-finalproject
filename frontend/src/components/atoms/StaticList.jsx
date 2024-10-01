import React from 'react';

const StaticList = ({ title, items, mainProperty }) => {
    return (
        <div className="scrollable-list-container">
            <h2 className="text-primary">{title}</h2>
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index} className="list-item">
                        {mainProperty ? item[mainProperty] : item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaticList;