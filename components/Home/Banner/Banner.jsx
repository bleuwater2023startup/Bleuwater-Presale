import classes from "./Banner.module.css";
import BannerBg from "../../../assets/banner-bg.png";
import BannerBgMobile from "../../../assets/banner-bg-mobile.png";
import Image from "next/image";
import Button from "../../Button/Button";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/banner.json";
import useMediaQuery from "@mui/material/useMediaQuery";

const Banner = () => {
  const matches = useMediaQuery("(max-width:768px)");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Image className={classes.bg} src={matches ? BannerBgMobile : BannerBg} alt="" />
        <div className={classes.textSection}>
          <div className={classes.mainText}>The wave is coming, be in control!</div>
          <div className={classes.subText1}>
            We will help you launch your NFT ecosystem with the guarantee of protected NFTs, full
            ownership of your smart contracts and royalty payout on secondary sales.
          </div>
          <div className={classes.subText2}>{"You’re early, buy NFT to join Waitlist!"}</div>
          <div className={classes.button}>
            <Button height={6} light>
              Join waitlist
            </Button>
          </div>
        </div>
        <div className={classes.lottie}>
          <Lottie
            options={defaultOptions}
            isStopped={false}
            isPaused={false}
            width={"100%"}
            height={"auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
