import React, { useState } from "react";
function Tab1Content() {
  return (
    <div id="tab1" className="tab-pane">
      <p>Tab 1 content</p>
    </div>
  );
}

function Tab2Content() {
  return (
    <div id="tab2" className="tab-pane">
      <p>Tab 2 content</p>
    </div>
  );
}

function Tab3Content() {
  return (
    <div id="tab3" className="tab-pane">
      <p>Tab 3 content</p>
    </div>
  );
}
function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <ul className="flex mb-0 list-none">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
            href="#tab1"
            onClick={() => handleTabChange("tab1")}
          >
            Tab 1
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
            href="#tab2"
            onClick={() => handleTabChange("tab2")}
          >
            Tab 2
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
            href="#tab3"
            onClick={() => handleTabChange("tab3")}
          >
            Tab 3
          </a>
        </li>
      </ul>

      <div className="tab-content">
        {/* <div
          id="tab1"
          className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
        >
          <p>Tab 1 content</p>
        </div>
        <div
          id="tab2"
          className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
        >
          <p>Tab 2 content</p>
        </div>
        <div
          id="tab3"
          className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}
        >
          <p>Tab 3 content</p>
        </div> */}
        <Tab1Content />
        <Tab2Content />
        <Tab3Content />
      </div>
    </div>
  );
}

export default Tabs;
