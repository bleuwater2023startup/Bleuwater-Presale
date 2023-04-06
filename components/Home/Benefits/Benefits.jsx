import classes from "./Benefits.module.css";
import BenefitIcon from "../../../assets/benefits.png";
import { data } from "./BenefitsData";
import BenefitCheck from "../../../assets/benefit-check.svg";
import Image from "next/image";
import FadeAnimation from "../../FadeAnimation/FadeAnimation";

const Benefits = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.mainText}>Our NFT</div>
        <div className={classes.subText}>What you get when you buy Bleuwater NFTs</div>
      </FadeAnimation>
      <FadeAnimation width="100%">
        <div className={classes.wrapper}>
          <div className={classes.innerContainer}>
            {data.map((benefit, idx) => (
              <div key={idx} className={classes.benefit}>
                <BenefitCheck className={classes.checkIcon} />
                <div className={classes.text}>{benefit}</div>
              </div>
            ))}
          </div>
          <Image className={classes.image} src={BenefitIcon} alt="" />
        </div>
      </FadeAnimation>
    </div>
  );
};

export default Benefits;
