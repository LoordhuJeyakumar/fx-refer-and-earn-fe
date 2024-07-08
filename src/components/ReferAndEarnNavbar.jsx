import React, { useState } from "react";

function ReferAndEarnNavbar({ tabs, activeTab, setActiveTab }) {
  return (
    <div>
      <div className=" refer-navbar-container mt-3 mx-auto flex flex-wrap justify-center md:flex md:justify-around">
        <nav className="bg-[rgba(26,115,232,0.11)] refer-navbar ">
          <ul className="nav-ul tab-list flex justify-around flex-wrap">
            {tabs.map((tab, index) => (
              <li key={index} className="nav-item">
                <a
                  onClick={() => setActiveTab(index)}
                  className={`nav-link ${index === activeTab ? "active" : ""}`}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ReferAndEarnNavbar;
