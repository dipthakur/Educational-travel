import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-buttons">
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <i className="bi bi-chevron-double-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
