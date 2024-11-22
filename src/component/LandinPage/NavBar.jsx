import { Link, BrowserRouter } from "react-router-dom";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import HideSec from "./HideSec";
import { RainbowButton } from "../ui/rainbow-button";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [affix, setAffix] = useState(false);
  const [showHideSec, setShowHideSec] = useState(false); // State for showing/hiding <HideSec />

  const handleMenu = () => {
    setShowNavbar((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setAffix(true);
    } else {
      setAffix(false);
    }
  };

  const toggleHideSec = () => {
    setShowHideSec((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={`h-[40px] ${affix ? styles.topAffix : ""}`}></div>
     <div>
       <header
        className={`p-3 lg:p-6 ${styles.header} ${affix ? styles.affix : ""}`}
      >
        <div className="container mx-auto px-4 py-2 lg:py-3 lg:px-[15px]">
          <nav className={styles.navbar}>
            <div>
              <img src="/images/cohvey-logo.svg" alt="Logo" className="w-[90%]" />
            </div>
            <div
              className={`${styles["navbar-collapse"]} ${
                showNavbar ? styles.show : ""
              }`}
            >
              {showNavbar && (
                <div
                  className={`cursor-pointer ml-6 mb-4 lg:hidden ${styles.position}`}
                  onClick={handleMenu}
                >
                  <img src="/images/icons/icons8-close.svg" alt="Close" />
                </div>
              )}
              <ul
                className={`${styles["navbar-nav"]} lg:flex items-center mx-auto`}
              >
                <li className="f-Nohemi-Light-BF6438cc583f70b font-normal">
                  <Link to="/" className={styles["nav-link"]}>
                    Services
                  </Link>
                </li>
                <li className="f-Nohemi-Light-BF6438cc583f70b font-normal">
                  <Link to="/products" className={styles["nav-link"]}>
                    Our Work
                  </Link>
                </li>
                <li className="f-Nohemi-Light-BF6438cc583f70b font-normal">
                  <Link
                    to="#"
                    onClick={toggleHideSec} // Handle click to toggle <HideSec />
                    className={styles["nav-link"]}
                  >
                    Product
                  </Link>
                </li>
                <li className="f-Nohemi-Light-BF6438cc583f70b font-normal">
                  <Link to="/contact" className={styles["nav-link"]}>
                    Resources
                  </Link>
                </li>
                <li className="f-Nohemi-Light-BF6438cc583f70b font-normal">
                  <Link to="/contact" className={styles["nav-link"]}>
                    Creator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <button
                className={`f-Nohemi-Light-BF6438cc583f70b ${styles.btn}`}
              >
                Join as a creator
              </button>
              <RainbowButton className="f-Nohemi-Light-BF6438cc583f70b rounded-[15px] text-[#0C0C0C] text-[15px] flex items-center justify-center px-5 pb-2 pt-3 border-[1px] border-[#FCFCD80F] hover:border-[1px] hover:border-gray-600 hover:bg-[#1F1F1FEB] hover:text-[#FCFCD8] duration-300">Join Waitlist</RainbowButton>
            </div>
          </nav>
        </div>
      </header>
      {/* Conditionally render <HideSec /> */}
      <div className="flex justify-center">
      {showHideSec && <HideSec />}
      </div>
     </div>
    </BrowserRouter>
  );
}

export default NavBar;
