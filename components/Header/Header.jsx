import Link from "next/link";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import ConnectWalletMobile from "../ConnectWallet-Mobile/ConnectWallet";
import classes from "./Header.module.css";
import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/desktop-logo.svg";
import LogoMobile from "../../assets/mobile-logo.svg";
import HamburgerIcon from "../../assets/icon-hamburger.svg";
import CloseIcon from "../../assets/icon-close.svg";
import ChevronIcon from "../../assets/icon-chevron.svg";
import Twitter from "../../assets/mobile-twitter-fill.svg";
import Instagram from "../../assets/mobile-instagram-fill.svg";
import Telegram from "../../assets/mobile-telegram-fill.svg";
import { StateContext } from "../../context/state.context";
import CopyText from "../CopyText/CopyTest";
import supportedChains from "../../utils/supportedChains";
import { formatAccount } from "../../utils";
import { disconnectMetamask } from "../MetamaskConnect/MetamaskConnect.script";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { account, chainId, walletProvider, dispatch } =
    useContext(StateContext);
  const matches = useMediaQuery("(min-width:768px)");

  const handleDisconnect = () => {
    if (walletProvider?.isWalletConnect) {
      walletProvider.disconnect();
    } else {
      disconnectMetamask({ dispatch });
    }
    setNavOpen(false);
  };

  const handleGoToDonate = () => {
    const element = document.getElementById("donate");
    element.scrollIntoView();
  };

  useEffect(() => {
    if (matches) {
      setNavOpen(false);
    }
  }, [matches]);

  const navDesktop = (
    <div className={`${classes.container} ${classes.desktop}`}>
      <Link href="/">
        <Logo className={classes.logo} />
      </Link>
      <div className={classes.wrapper}>
        <div onClick={handleGoToDonate} className={classes.donate}>
          Donate
        </div>
        <div className={classes.connect}>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );

  const navMobile = (
    <div className={`${classes.container} ${classes.mobile}`}>
      <Link href="/">
        <LogoMobile className={classes.logo} />
      </Link>
      <div className={classes.searchAndNotificationContainer}>
        <HamburgerIcon
          onClick={() => setNavOpen(true)}
          className={classes.openIcon}
        />
      </div>
    </div>
  );

  const sidebar = (
    <div className={`${classes.sidebarContainer} ${navOpen && classes.active}`}>
      <div className={classes.sidebar}>
        <div onClick={() => setNavOpen(false)} className={classes.closeIcon}>
          <CloseIcon />
        </div>
        <div onClick={() => setNavOpen(false)} className={classes.connect}>
          <ConnectWalletMobile />
        </div>
        {account && (
          <div className={classes.addressContainer}>
            <div className={classes.chain}>
              {supportedChains[parseInt(chainId)]?.chainName}
            </div>
            <div className={classes.address}>
              <CopyText message={account} icon>
                {formatAccount(account, 5, 4)}
              </CopyText>
            </div>
          </div>
        )}
        <div className={classes.listItemContainer}>
          <div onClick={handleDisconnect} className={classes.listItem}>
            <div>Disconnet wallet</div>
            <ChevronIcon className={classes.chevronIcon} />
          </div>
        </div>
        <div className={classes.socialMediaLinks}>
          <div onClick={() => setNavOpen(false)} className={classes.link}>
            <Twitter />
          </div>
          <div onClick={() => setNavOpen(false)} className={classes.link}>
            <Instagram />
          </div>
          <div onClick={() => setNavOpen(false)} className={classes.link}>
            <Telegram />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {navDesktop}
      {navMobile}
      {sidebar}
    </>
  );
};

export default Header;
