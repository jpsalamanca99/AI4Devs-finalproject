import React from "react";

const SubmitButton = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default SubmitButton;
