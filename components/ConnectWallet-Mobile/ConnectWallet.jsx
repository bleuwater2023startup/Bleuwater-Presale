import { useContext, useEffect } from "react";
import { setModal } from "../../context/state.actions";
import { StateContext } from "../../context/state.context";
import { modalTypes } from "../../context/state.types";
import { formatAccount } from "../../utils";
import supportedChains from "../../utils/supportedChains";
import { checkMetamaskConnection } from "../MetamaskConnect/MetamaskConnect.script";
import { checkWalletConnectConnection } from "../WalletConnect/WalletConnect.script";
import classes from "./ConnectWallet.module.css";

const ConnectWallet = () => {
  const { dispatch, account, chainId } = useContext(StateContext);

  const handleConnectModal = () => {
    dispatch(setModal(modalTypes.CONNECT_WALLET));
  };

  useEffect(() => {
    checkMetamaskConnection({ dispatch });
    checkWalletConnectConnection({ dispatch });
  }, [dispatch]);

  return (
    <>
      {account ? (
        <div className={classes.connected}>
          {chainId ? (
            <img
              src={supportedChains[parseInt(chainId)]?.iconUrls[0]}
              alt=""
              className={classes.chainIcon}
            />
          ) : null}
          <div className={classes.account}>{formatAccount(account, 6, 6)}</div>
        </div>
      ) : (
        <div className={classes.connect} onClick={handleConnectModal}>
          <div>Connect wallet</div>
        </div>
      )}
    </>
  );
};

export default ConnectWallet;
