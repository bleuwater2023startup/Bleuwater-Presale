import FeaturesCard from "./FeaturesCard";
import classes from "./Features.module.css";
import { data } from "./FeaturesData";
import Button from "../../Button/Button";
import FadeAnimation from "../../FadeAnimation/FadeAnimation";

const Features = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.mainText}>
          All your NFT project needs in one place
        </div>
        <div className={classes.subText}>
          Features that helps you sell, protect and get royalties paid
        </div>
      </FadeAnimation>
      <FadeAnimation>
        <>
          <div className={classes.features}>
            {data.map((feature, idx) => (
              <FeaturesCard key={idx} feature={feature} />
            ))}
          </div>
          <div className={classes.button}>
            <a href="mailto:infobleuwater@gmail.com">
              <Button accent fill outline_dark height={5}>
                Get in touch
              </Button>
            </a>
          </div>
        </>
      </FadeAnimation>
    </div>
  );
};

export default Features;
