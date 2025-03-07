import React, { useState } from "react";
import "../App.css";
import "../styles/DiamondCutChar.css";

const DiamondCutTabs = () => {
  const tabs = [
    {
      name: "Table",
      img: "https://www.brilliantearth.com/bee2-ui/img/buying-guide/table_new.svg",
      description: "The Flat Surface At The Top Of The Diamond.",
    },
    {
      name: "Crown",
      img: "https://www.brilliantearth.com/bee2-ui/img/buying-guide/crown_new.svg",
      description:
        "The Upper Portion Of The Diamond Between The Girdle And The Table.",
    },
    {
      name: "Girdle",
      img: "https://www.brilliantearth.com/bee2-ui/img/buying-guide/girdle_new.svg",
      description: "The Narrow Band That Forms The Outer Edge Of The Diamond.",
    },
    {
      name: "Pavilion",
      img: "https://www.brilliantearth.com/bee2-ui/img/buying-guide/pavilion_new.svg",
      description: "The Lower Portion Of The Diamond Below The Girdle.",
    },
    {
      name: "Culet",
      img: "https://www.brilliantearth.com/bee2-ui/img/buying-guide/culet_new.svg",
      description: "The Small Facet At The Bottom Of The Diamond.",
    },
    {
      name: "Depth",
      img: "https://www.brilliantearth.com/bee2-ui/img/buying-guide/depth_new.svg",
      description: "The Total Height Of The Diamond From Table To Culet.",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="diamond-tabs">
      <div className="tabs">
        {tabs.map((tab) => (
          <span
            key={tab.name}
            className={`tab ${selectedTab.name === tab.name ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.name}
          </span>
        ))}
      </div>

      <div className="diamond-image-container">
        <img
          src={selectedTab.img}
          alt={selectedTab.name}
          className="diamond-image"
        />
      </div>
      <div className="diamond-description">
        <h3>{selectedTab.name}</h3>
        <p>{selectedTab.description}</p>
      </div>
    </div>
  );
};

export default DiamondCutTabs;
