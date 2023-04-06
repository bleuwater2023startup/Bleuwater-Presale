import classes from "./SupportedBlockchains.module.css";
import PolygonIcon from "../../../assets/icon-polygon-00.svg";
import EthereumIcon from "../../../assets/icon-ethereum-00.svg";
import FadeAnimation from "../../FadeAnimation/FadeAnimation";

const SupportedBlockchains = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.mainText}>Blockchains we support</div>
      </FadeAnimation>
      <FadeAnimation width={"100%"}>
        <div className={classes.wrapper}>
          <div className={classes.rightShadow}></div>
          <div className={classes.leftShadow}></div>
          <div className={classes.carouselContainer}>
            {[1, 2].map((el) => (
              <div key={el} className={classes.blockchains}>
                <div className={classes.blockchain}>
                  <EthereumIcon className={classes.icon} />
                  <div className={classes.name}>Ethereum</div>
                </div>
                <div className={classes.blockchain}>
                  <PolygonIcon className={classes.icon} />
                  <div className={classes.name}>polygon</div>
                </div>
                <div className={classes.blockchain}>
                  <EthereumIcon className={classes.icon} />
                  <div className={classes.name}>Ethereum</div>
                </div>
                <div className={classes.blockchain}>
                  <PolygonIcon className={classes.icon} />
                  <div className={classes.name}>polygon</div>
                </div>
                <div className={classes.blockchain}>
                  <EthereumIcon className={classes.icon} />
                  <div className={classes.name}>Ethereum</div>
                </div>
                <div className={classes.blockchain}>
                  <PolygonIcon className={classes.icon} />
                  <div className={classes.name}>polygon</div>
                </div>
                <div className={classes.blockchain}>
                  <EthereumIcon className={classes.icon} />
                  <div className={classes.name}>Ethereum</div>
                </div>
                <div className={classes.blockchain}>
                  <PolygonIcon className={classes.icon} />
                  <div className={classes.name}>polygon</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeAnimation>
    </div>
  );
};

export default SupportedBlockchains;
