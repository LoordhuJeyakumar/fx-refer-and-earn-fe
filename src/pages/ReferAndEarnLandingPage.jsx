import { useState } from "react";

import ReferAndEarnNavbar from "../components/ReferAndEarnNavbar";
import Refer from "../components/Refer";
import PopupModalForm from "../components/PopupModalForm";
import ReferProcess from "../components/ReferProcess";
import ReferelBenifits from "../components/ReferelBenifits";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Support from "../components/Support";
import Navbar from "../components/Navbar";

function ReferAndEarnLandingPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const tabsData = [
    { label: "Refer", content: <Refer handleOpen={handleOpen} /> },
    {
      label: "How to Refer",
      content: (
        <div>
          <ReferProcess handleOpen={handleOpen} />
        </div>
      ),
    },
    { label: "Earn", content: <ReferelBenifits handleOpen={handleOpen} /> },
    { label: "FAQs", content: <FrequentlyAskedQuestions /> },
    { label: "Support", content: <Support /> },
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
      <PopupModalForm open={open} setOpen={setOpen} />

      <div>
        {tabsData.map((tab, index) => (
          <div key={index} id={`tab-content-${index}`} className="mt-6 p-4">
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReferAndEarnLandingPage;
