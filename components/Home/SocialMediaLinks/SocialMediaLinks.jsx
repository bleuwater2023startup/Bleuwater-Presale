import FadeAnimation from "../../FadeAnimation/FadeAnimation";
import classes from "./SocialMediaLinks.module.css";
import Twitter from "../../../assets/desktop-twitter-fill.svg";
import Instagram from "../../../assets/desktop-instagram-fill.svg";
import { useContext } from "react";
import { StateContext } from "../../../context/state.context";
import { setModal } from "../../../context/state.actions";
import { modalTypes } from "../../../context/state.types";

const SocialMediaLinks = () => {
  const { dispatch } = useContext(StateContext);

  const handleFeedback = () => {
    dispatch(setModal(modalTypes.FEEDBACK));
  };

  return (
    <FadeAnimation width="100%" offset={100}>
      <div className={classes.container}>
        <div className={classes.projects}>
          <div>Explore</div>
          <div>Collection</div>
          <div>Create</div>
        </div>
        <div className={classes.smList}>
          <a
            href="https://www.instagram.com/bleuwaterstudio/"
            target="_blank"
            rel="noreferre nooopener"
            className={classes.item}
          >
            <Instagram />
            <div>Connect on Instagram</div>
          </a>
          <a
            href="https://twitter.com/BleuWaterSol"
            target="_blank"
            rel="noreferre nooopener"
            className={classes.item}
          >
            <Twitter />
            <div>Connect on Twitter</div>
          </a>
          <div onClick={handleFeedback} className={classes.item}>
            Feedback
          </div>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default SocialMediaLinks;
