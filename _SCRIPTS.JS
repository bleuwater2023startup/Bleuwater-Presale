import { ethers } from "ethers";
import { FUNDME_ABI } from "./_CONSTANTS.JS";
import { setLoadingScreen, setNotification } from "./context/state.actions";
import { writeContract } from "./utils";
import { switchChain } from "./utils/supportedChains";
import { FUNDME_MATIC } from "./_CONSTANTS.JS";

export const beforeTransfer = {
  title: "You are about to transfer your NFT.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onTransfer = {
  title: "Thank you for your confirmation",
  description:
    "Your transaction is being processed. This may take a few miniutes.",
};

export const handleTransferMatic = async ({ dispatch, walletProvider }) => {
  const res = await switchChain("0x13881");
  if (res) {
    dispatch(
      setNotification({
        type: "error",
        message: "Unsopported network detected. Switch to ethereum.",
      })
    );
    return;
  }
  dispatch(setLoadingScreen(beforeTransfer));
  const options = {
    abi: FUNDME_ABI,
    contractAddress: FUNDME_MATIC,
    functionName: "transfer",
    params: {
      value: {
        value: ethers.utils.parseEther("0.1"),
      },
    },
  };

  const txResponse = await writeContract({
    params: options,
    walletProvider,
    onError: (error) => {
      dispatch(
        setNotification({
          type: "error",
          message: error.reason || error.data.message,
        })
      );
      dispatch(setLoadingScreen({}));
    },
    onSuccess: (tx) => dispatch(setLoadingScreen(onTransfer)),
  });

  if (txResponse) {
    let res = await txResponse.wait();
    dispatch(
      setNotification({
        type: "success",
        message: "Transfer successful.",
      })
    );
    dispatch(setLoadingScreen({}));
    return res;
  }
};

export const handleTransferEthereum = async ({ dispatch, walletProvider }) => {
  const res = await switchChain("0x5");
  if (res) {
    dispatch(
      setNotification({
        type: "error",
        message: "Unsopported network detected. Switch to ethereum.",
      })
    );
    return;
  }
  dispatch(setLoadingScreen(beforeTransfer));
  const options = {
    abi: FUNDME_ABI,
    contractAddress: FUNDME_MATIC,
    functionName: "transfer",
    params: {
      value: {
        value: ethers.utils.parseEther("0.01"),
      },
    },
  };

  const txResponse = await writeContract({
    params: options,
    walletProvider,
    onError: (error) => {
      dispatch(
        setNotification({
          type: "error",
          message: error.reason || error.data.message,
        })
      );
      dispatch(setLoadingScreen({}));
    },
    onSuccess: (tx) => dispatch(setLoadingScreen(onTransfer)),
  });

  if (txResponse) {
    let res = await txResponse.wait();
    dispatch(
      setNotification({
        type: "success",
        message: "Transfer successful.",
      })
    );
    dispatch(setLoadingScreen({}));
    return res;
  }
};
