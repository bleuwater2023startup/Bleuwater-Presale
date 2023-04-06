import classes from "./ConnectWalletError.module.css";
import WalletIcon from "../../assets/icon-wallet.svg";
import Button from "../Button/Button";
import { useContext } from "react";
import { StateContext } from "../../context/state.context";
import { setModal } from "../../context/state.actions";
import { modalTypes } from "../../context/state.types";

const ConnectWalletError = () => {
  const { dispatch } = useContext(StateContext);

  const handleConnectModal = () => {
    dispatch(setModal(modalTypes.CONNECT_WALLET));
  };

  return (
    <div className={classes.container}>
      <div className={classes.walletIcon}>
        <WalletIcon />
      </div>
      <div className={classes.heading}>Wallet required</div>
      <div className={classes.description}>
        Please, connect your wallet to sign messages and send transactions to blockchain
      </div>
      <div onClick={handleConnectModal} className={classes.button}>
        <Button accent dark>
          Connect wallet
        </Button>
      </div>
    </div>
  );
};

export default ConnectWalletError;
