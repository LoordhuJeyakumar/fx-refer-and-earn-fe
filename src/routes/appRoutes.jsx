import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ReferAndEarnLandingPage from "../../pages/ReferAndEarnLandingPage";

function appRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReferAndEarnLandingPage />} />
      </Routes>
    </Router>
  );
}

export default appRoutes;
