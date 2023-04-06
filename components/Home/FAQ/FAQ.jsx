import { useState } from "react";
import FadeAnimation from "../../FadeAnimation/FadeAnimation";
import classes from "./FAQ.module.css";
import FAQCard from "./FAQCard";
import { data } from "./FAQData";

const FAQ = () => {
  const [dropdown, setDropdown] = useState("");

  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.mainText}>FAQ</div>
        <div className={classes.subText}>
          We’re fueled to educate, onboard and help you deploy and build for web3
        </div>
      </FadeAnimation>
      <FadeAnimation>
        <div className={classes.faqContainer}>
          {data.map((faq, idx) => (
            <FAQCard
              key={idx}
              faq={faq}
              dropdown={dropdown}
              setDropdown={(e) => setDropdown(e === dropdown ? "" : e)}
            />
          ))}
        </div>
      </FadeAnimation>
    </div>
  );
};

export default FAQ;
