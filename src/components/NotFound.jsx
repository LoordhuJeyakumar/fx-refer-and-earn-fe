import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Sparkles } from "lucide-react";
import LogoComponent from "./LogoComponent";
import Navbar from "./Navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center  bg-gradient-to-b from-white to-blue-50">
        {/* Sparkles Icon */}
        <Sparkles className="w-16 h-16 text-blue-600 mb-4 animate-pulse" />
        <LogoComponent animate={false} />

        {/* Main Content */}
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-600 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          It seems the page you are looking for does not exist.
        </p>

        {/* Back to Home Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Go Back to Home
        </Button>
      </div>
    </>
  );
};

export default NotFound;
