import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import ReferAndEarnNavbar from "../src/components/ReferAndEarnNavbar";
import Tabs from "../src/components/Tabs";
import PopoverComponent from "../src/components/PopoverComponent";
import Refer from "../src/components/Refer";
import PopupModalForm from "../src/components/PopupModalForm";
import ReferProcess from "../src/components/ReferProcess";
import ReferelBenifits from "../src/components/ReferelBenifits";
import FrequentlyAskedQuestions from "../src/components/FrequentlyAskedQuestions";

function TabContent({ content }) {
  return <div className="tab-content">{content}</div>;
}

function ReferAndEarnLandingPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("open");
  };
  const handleClose = () => setOpen(false);

  const tabsData = [
    { label: "Refer", content: <Refer handleOpen={handleOpen} /> },
    { label: "Earn", content: <p>Earn</p> },
    { label: "FAQs", content: <p>FAQs</p> },
    { label: "Support", content: <p>Support</p> },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Navbar />

      <div className="w-full refer-navbar-container mt-5 mx-auto">
        <ReferAndEarnNavbar
          tabs={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <TabContent content={tabsData[activeTab].content} />
      <PopupModalForm open={open} setOpen={setOpen} />
      <ReferProcess handleOpen={handleOpen} />
      <ReferelBenifits handleOpen={handleOpen} />
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default ReferAndEarnLandingPage;
