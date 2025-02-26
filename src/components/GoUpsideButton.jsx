import { useState, useEffect } from "react";

function GoUpsideButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center position-fixed bottom-0 end-0 mb-5 me-4"
          style={{ width: "50px", height: "50px" }}
        >
          <i
            className="bi bi-chevron-up text-primary fw-bold fs-3"
            id="upsidebtn"
          ></i>
        </button>
      )}
    </div>
  );
}

export default GoUpsideButton;
