import classes from "./Presale.module.css";
import presaleImg from "../../assets/presale.png";
import Button from "../Button/Button";
import { handleTransfer } from "../../_SCRIPTS.JS";
import { useContext } from "react";
import { StateContext } from "../../context/state.context";
import { useRouter } from "next/router";

const Presale = () => {
  const { dispatch, walletProvider } = useContext(StateContext);
  const router = useRouter();

  const _handleTransfer = async () => {
    await handleTransfer({ dispatch, walletProvider });
    router.push("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={presaleImg.src} alt="" />
      </div>
      <div className={classes.title}>Join the Presale list</div>
      <div className={classes.description}>
        Be the first to use our create page to deploy protected NFT collection
        with Zero platform fees to Ethereum and Polygon mainnet{" "}
      </div>
      <div className={classes.info}>
        You need to have 0.1 ETH + gas in your wallet to join Presale
      </div>
      <div onClick={_handleTransfer} className={classes.joinBtn}>
        <Button accent dark>
          Join Presale
        </Button>
      </div>
    </div>
  );
};

export default Presale;
