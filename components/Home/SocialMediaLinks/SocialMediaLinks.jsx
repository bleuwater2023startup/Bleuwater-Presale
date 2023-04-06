import FadeAnimation from "../../FadeAnimation/FadeAnimation";
import SocialMediaLinkCard from "./SocialMediaLinkCard";
import { data } from "./SocialMediaLinkData";
import classes from "./SocialMediaLinks.module.css";

const SocialMediaLinks = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.mainText}>Follow us on social media</div>
      </FadeAnimation>
      <FadeAnimation>
        <div className={classes.smlContainer}>
          {data.map((sml, idx) => (
            <SocialMediaLinkCard key={idx} sml={sml} />
          ))}
        </div>
      </FadeAnimation>
    </div>
  );
};

export default SocialMediaLinks;
