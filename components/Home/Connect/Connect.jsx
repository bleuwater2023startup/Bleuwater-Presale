import classes from "./Connect.module.css";
import lunch from "../../../assets/icon-lunch.png";
import Image from "next/image";
import Arrow from "../../../assets/arrow.svg";
import FadeAnimation from "../../FadeAnimation/FadeAnimation";

const Connect = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.innerContainer}>
          <div className={classes.detail}>
            <div className={classes.mainText}>Your own Ecosystem</div>
            <div className={classes.subText}>
              get your own Ecosystem with your nfts protected from being sold on other marketplace,
              plus automated royalty splits and payouts in secondary sales!
            </div>
          </div>
          <div className={classes.btnContainer}>
            <div className={classes.btn1}>
              Deploy NFTs <br /> Collection
              <Arrow className={classes.icon} />
            </div>
            <div className={classes.btn2}>
              Explore NFTs <br /> Collection
              <Arrow className={classes.icon} />
            </div>
          </div>
          <Image className={classes.lunchIcon} src={lunch} alt="" />
        </div>
      </FadeAnimation>
    </div>
  );
};

export default Connect;
