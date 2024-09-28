import React, { useState } from 'react';

const TabHolder = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button 
                        key={index} 
                        onClick={() => setActiveTab(index)} 
                        className={`button ${activeTab === index ? 'active' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content(tabs[activeTab].args)}
            </div>
        </div>
    );
};

export default TabHolder;
