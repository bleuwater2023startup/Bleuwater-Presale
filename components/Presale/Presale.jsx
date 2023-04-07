import classes from "./Presale.module.css";
import presaleImg from "../../assets/presale.png";
import Button from "../Button/Button";
import { useContext } from "react";
import { StateContext } from "../../context/state.context";
import { useRouter } from "next/router";
import { handleTransferMatic } from "../../_SCRIPTS.JS";
import { handleTransferEthereum } from "../../_SCRIPTS.JS";
import { setModal } from "../../context/state.actions";
import { modalTypes } from "../../context/state.types";
import InfoIcon from "../../assets/icon-info.svg";

const Presale = () => {
  const { dispatch, walletProvider, account } = useContext(StateContext);
  const router = useRouter();

  const handleConnectModal = () => {
    dispatch(setModal(modalTypes.CONNECT_WALLET));
  };

  const _handleTransferMatic = async () => {
    if (!account) return handleConnectModal();
    const res = await handleTransferMatic({ dispatch, walletProvider });
    if (res) {
      router.push("/");
    }
  };

  const _handleTransferEthereum = async () => {
    if (!account) return handleConnectModal();
    const res = await handleTransferEthereum({ dispatch, walletProvider });
    if (res) {
      router.push("/");
    }
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
        <InfoIcon />
        <span>
          You need to have 0.19 ETH + gas or 313 MATIC + gas in your wallet to
          join Presale
        </span>
      </div>
      <div className={classes.btnContainer}>
        <div onClick={_handleTransferEthereum} className={classes.joinBtn}>
          <Button outline_dark dark>
            Join with ETH
          </Button>
        </div>

        <div onClick={_handleTransferMatic} className={classes.joinBtn}>
          <Button outline_dark dark>
            Join with Matic
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Presale;
