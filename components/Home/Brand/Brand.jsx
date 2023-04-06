import classes from "./Brand.module.css";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/_brand.json";
import { useState, useEffect, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import FadeAnimation from "../../FadeAnimation/FadeAnimation";

const Brand = () => {
  const [isStopped, setIsStopped] = useState(false);
  const containerRef = useRef(null);
  const matches = useMediaQuery("(max-width:720px)");

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (!containerRef.current) return;
    let container = containerRef.current;
    window.addEventListener("scroll", () => {
      const offset = 450;
      const top = container.getBoundingClientRect().top;
      if (top + offset <= window.innerHeight) {
        setIsStopped(false);
      } else if (top >= window.innerHeight) {
        setIsStopped(true);
      }
    });
  }, []);

  return (
    <div ref={containerRef} className={classes.container}>
      <div className={classes.subText}>
        <FadeAnimation>
          We build Fully-featured ecosystem for NFT trading and protection
        </FadeAnimation>
      </div>
      <Lottie
        className={classes.brandImage}
        options={defaultOptions}
        isStopped={isStopped}
        isPaused={false}
        width={matches ? "100%" : "70%"}
      />
    </div>
  );
};

export default Brand;
