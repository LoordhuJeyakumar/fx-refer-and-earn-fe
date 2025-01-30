import { PropTypes } from "prop-types";

function ReferAndEarnNavbar({ tabs, activeTab, setActiveTab }) {
  const handleTabClick = (index) => {
    setActiveTab(index);
    const sectionId = `tab-content-${index}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className=" refer-navbar-container mt-3 mx-auto flex flex-wrap justify-center md:flex md:justify-around">
        <nav className="bg-[rgba(26,115,232,0.11)] refer-navbar ">
          <ul className="nav-ul tab-list flex justify-around flex-wrap">
            {tabs.map((tab, index) => (
              <li key={index} className="nav-item">
                <a
                  onClick={() => handleTabClick(index)}
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

ReferAndEarnNavbar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ReferAndEarnNavbar;
