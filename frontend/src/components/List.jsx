import React from 'react';

const List = ({ title, items }) => {
    return (
        <div className="scrollable-list-container">
            <h2 className="text-primary">{title}</h2>
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index} className="list-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;