import { useRef, useEffect, useState } from "react";
import classes from "./FadeAnimation.module.css";

const FadeAnimation = ({ children, width, offset = 150 }) => {
  const containerRef = useRef(null);
  const [hide, setHide] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!animate) return;
      try {
        if (!containerRef.current) return;
        const containerTop = containerRef.current?.getBoundingClientRect().top;
        if (containerTop + offset <= window.innerHeight) {
          setHide(false);
          setAnimate(false);
        } else if (containerTop >= window.innerHeight) {
          setHide(true);
        }
      } catch (error) {}
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, animate]);

  return (
    <div
      style={{ width: width || "auto" }}
      ref={containerRef}
      className={classes.container}
    >
      <div
        className={`${classes.wrapper} ${
          hide ? classes.slideDown : classes.slideUp
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeAnimation;
