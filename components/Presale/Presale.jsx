import classes from "./Presale.module.css";
import presaleImg from "../../assets/presale.png";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/state.context";
import { useRouter } from "next/router";
import { handleTransferMatic } from "../../_SCRIPTS.JS";
import { handleTransferEthereum } from "../../_SCRIPTS.JS";
import { setModal } from "../../context/state.actions";
import { modalTypes } from "../../context/state.types";
import InfoIcon from "../../assets/icon-info.svg";
import { fetchMaticPriceInEth } from "../../_SCRIPTS.JS";

export const ethPrice = 0.19;

const Presale = () => {
  const { dispatch, walletProvider, account } = useContext(StateContext);
  const [ethMaticPrice, setEthMaticPrice] = useState(0);

  const router = useRouter();

  const handleConnectModal = () => {
    dispatch(setModal(modalTypes.CONNECT_WALLET));
  };

  const _handleTransferMatic = async () => {
    if (!ethMaticPrice) return alert("Invalid price");
    if (!account) return handleConnectModal();
    const res = await handleTransferMatic({
      dispatch,
      walletProvider,
      price: String(ethPrice / ethMaticPrice),
    });
    if (res) {
      router.push("/");
    }
  };

  const _handleTransferEthereum = async () => {
    if (!account) return handleConnectModal();
    const res = await handleTransferEthereum({
      dispatch,
      walletProvider,
      price: String(ethPrice),
    });
    if (res) {
      router.push("/");
    }
  };

  useEffect(() => {
    (async () => {
      const res = await fetchMaticPriceInEth();
      if (res) {
        setEthMaticPrice(res);
      }
    })();
  }, []);

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
          You need to have {ethPrice} ETH + gas or{" "}
          {ethMaticPrice ? (ethPrice / ethMaticPrice).toFixed(2) : "N/A"} MATIC
          + gas in your wallet to join Presale
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
