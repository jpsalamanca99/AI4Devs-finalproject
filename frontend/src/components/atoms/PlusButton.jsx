import React from 'react';

const PlusButton = ({ onClick }) => {
    return (
        <button className="round-button" onClick={onClick}>
            +
        </button>
    );
};

export default PlusButton;
