import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import NotFound from "../components/NotFound";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ReferAndEarnLandingPage from "../pages/ReferAndEarnLandingPage";

function appRoutes() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<ReferAndEarnLandingPage />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/resources" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default appRoutes;
