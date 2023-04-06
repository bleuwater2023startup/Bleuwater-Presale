import { useRef } from "react";
import { useEffect, useState } from "react";
import classes from "./FadeAnimation.module.css";

const FadeAnimation = ({ children, width, offset = 150 }) => {
  const containerRef = useRef(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      try {
        if (!containerRef.current) return;
        const containerTop = containerRef.current?.getBoundingClientRect().top;
        if (containerTop + offset <= window.innerHeight) {
          setHide(false);
        } else if (containerTop >= window.innerHeight) {
          setHide(true);
        }
      } catch (error) {}
    });
  }, []);

  return (
    <div style={{ width: width || "auto" }} ref={containerRef} className={classes.container}>
      <div className={`${classes.wrapper} ${hide ? classes.slideDown : classes.slideUp}`}>
        {children}
      </div>
    </div>
  );
};

export default FadeAnimation;
