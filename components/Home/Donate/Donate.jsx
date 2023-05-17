/* eslint-disable @next/next/no-img-element */
import FadeAnimation from "../../FadeAnimation/FadeAnimation";
import classes from "./Donate.module.css";
import { useRef, useState } from "react";
import CopyIcon from "../../../assets/icon-copy2.svg";

const Donate = () => {
  const [activeNetwork, setActiveNetwork] = useState("ETH");
  const [copied, setCopy] = useState(false);

  const copyRef = useRef(null);

  const handleCopy = (props) => {
    const { navigator, copy } = props;
    copy.select();
    copy.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copy.value);
    setCopy(true);
  };

  const handleReset = () => {
    setTimeout(() => {
      setCopy(false);
    }, 50);
  };
  const network = {
    ETH: {
      qrcode: "/qrcode/eth.png",
      address: "0x67B859108Ff0319653E2F30bda854F3601115f40",
    },
    MATIC: {
      qrcode: "/qrcode/matic.png",
      address: "",
    },
    FTM: {
      qrcode: "/qrcode/ftm.png",
      address: "0x66f857C39EE29154d50d9aB6B1FdF5254Da7518E",
    },
  };

  return (
    <div id="donate" className={classes.container}>
      <FadeAnimation>
        <div className={classes.title}>Donate to Bleuwater</div>

        <div className={classes.addressBox}>
          <div className={classes.tabs}>
            <div
              onClick={() => setActiveNetwork("ETH")}
              className={`${classes.network} ${
                activeNetwork === "ETH" && classes.active
              }`}
            >
              <div>ETH</div>
            </div>
            <div
              onClick={() => setActiveNetwork("MATIC")}
              className={`${classes.network} ${
                activeNetwork === "MATIC" && classes.active
              }`}
            >
              <div>MATIC</div>
            </div>
            <div
              onClick={() => setActiveNetwork("FTM")}
              className={`${classes.network} ${
                activeNetwork === "FTM" && classes.active
              }`}
            >
              <div>FTM</div>
            </div>
          </div>

          <div className={classes.innerContainer}>
            <div className={classes.title2}>ETHereum Address</div>
            <img
              className={classes.QRCodeContainer}
              src={network[activeNetwork].qrcode}
              alt=""
            />
            <div className={classes.address}>
              {network[activeNetwork].address}
            </div>
            <div
              onMouseOut={handleReset}
              onClick={() => handleCopy({ navigator, copy: copyRef.current })}
              className={classes.copyBox}
            >
              <div className={classes.tag}>
                {copied ? "Copied" : "Copy to clipboard"}
              </div>
              <CopyIcon className={classes.copyIcon} />
              <div>Copy to clipboard</div>
              <input
                style={{ display: "none" }}
                ref={copyRef}
                type="text"
                defaultValue={network[activeNetwork].address}
              />
            </div>
          </div>
        </div>
      </FadeAnimation>
    </div>
  );
};

export default Donate;
