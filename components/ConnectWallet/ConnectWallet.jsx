import { useContext, useEffect } from "react";
import { setModal } from "../../context/state.actions";
import { StateContext } from "../../context/state.context";
import { modalTypes } from "../../context/state.types";
import { formatAccount } from "../../utils";
import supportedChains from "../../utils/supportedChains";
import {
  checkMetamaskConnection,
  disconnectMetamask,
} from "../MetamaskConnect/MetamaskConnect.script";
import { checkWalletConnectConnection } from "../WalletConnect/WalletConnect.script";
import classes from "./ConnectWallet.module.css";
import ChevronIcon from "../../assets/icon-chevron.svg";
import CopyText from "../CopyText/CopyTest";

const ConnectWallet = () => {
  const { dispatch, account, chainId, walletProvider } =
    useContext(StateContext);

  const handleConnectModal = () => {
    dispatch(setModal(modalTypes.CONNECT_WALLET));
  };

  const handleDisconnect = () => {
    if (walletProvider?.isWalletConnect) {
      walletProvider.disconnect();
    } else {
      disconnectMetamask({ dispatch });
    }
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
          <div className={classes.account}>{formatAccount(account, 3, 3)}</div>
          <div className={classes.chevron}>
            <ChevronIcon />
          </div>
          <div className={classes.dropdownContainer}>
            <div className={classes.dropdownInnerContainer}>
              <div className={classes.dropdown}>
                <div className={classes.listItem}>
                  <div className={classes.chain}>
                    {supportedChains[parseInt(chainId)]?.chainName}
                  </div>
                  <div className={classes.address}>
                    <CopyText message={account} icon>
                      {formatAccount(account, 5, 4)}
                    </CopyText>
                  </div>
                </div>

                <div className={classes.listItem} onClick={handleDisconnect}>
                  Disconnect wallet
                </div>
              </div>
            </div>
          </div>
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
