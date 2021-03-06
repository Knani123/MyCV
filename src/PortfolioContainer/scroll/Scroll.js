import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./scroll.css";
const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 150) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon className="icon" />
    </div>
  );
};

export default ScrollToTop;
