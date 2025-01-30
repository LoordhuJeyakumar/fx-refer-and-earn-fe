import { useState, useEffect } from "react";
import { ArrowUpward } from "@mui/icons-material";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Throttle Scroll Event for Performance
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-6 right-6 group">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative p-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Back to top"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <ArrowUpward className="text-white w-6 h-6" />

            {/* Tooltip */}
            {showTooltip && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-medium py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-nowrap">
                Back to top
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default BackToTop;
