import React, { useState, useEffect } from "react";

const TabHolder = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
  }, [activeTab]);

  if (tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`button ${activeTab === index ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.createElement(tabs[activeTab].content, tabs[activeTab].args)}
      </div>
    </div>
  );
};

export default TabHolder;
