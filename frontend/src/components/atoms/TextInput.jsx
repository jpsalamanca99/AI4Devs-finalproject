import React from "react";

const TextInput = ({ placeholder, onChange, value, type = "text" }) => {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextInput;
