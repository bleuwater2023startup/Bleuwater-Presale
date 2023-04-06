import { ethers } from "ethers";
import { logError } from "./ipfs";
import supportedChains from "./supportedChains";

export const writeContract = async ({
  params: fetchParams,
  walletProvider,
  onError,
  onSuccess,
}) => {
  const { contractAddress, abi, functionName, params } = fetchParams;
  const provider = getWeb3Provider(walletProvider);
  const signer = provider.getSigner();
  try {
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const transactionResponse = await contract[functionName](...Object.values(params));
    onSuccess(transactionResponse);
    return transactionResponse;
  } catch (error) {
    onError(error);
  }
};

export const readContract = async ({
  params: fetchParams,
  walletProvider,
  onError,
  onSuccess,
  sign,
}) => {
  const { contractAddress, abi, functionName, params } = fetchParams;
  const provider = getWeb3Provider(walletProvider);
  const signer = provider.getSigner();
  try {
    const contract = new ethers.Contract(contractAddress, abi, sign ? signer : provider);
    const transactionResponse = await contract[functionName](...Object.values(params));
    onSuccess(transactionResponse);
    return transactionResponse;
  } catch (error) {
    onError(error);
  }
};

export const getContractTransferEvents = async ({
  contractAddress,
  abi,
  startBlock,
  walletProvider,
}) => {
  const provider = getWeb3Provider(walletProvider);
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const filter = contract.filters.Transfer(null, null, null);
  const res = await contract.queryFilter(filter, startBlock); //28927208
  return res.map((el) => el.args);
};

export const listenForTransferEvent = async ({ contractAddress, abi, onError, onSuccess }) => {
  try {
    const provider = new ethers.providers.WebSocketProvider(
      process.env.NEXT_PUBLIC_POLYGON_ALCHEMY_WSS_URL
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    contract.on("Transfer", (from, to, tokenId) => {
      onSuccess(from, to, tokenId);
    });
  } catch (error) {
    onError(error);
  }
};

export const listenForTransactionMine = ({ transactionResponse, provider }) => {
  console.log(`Mining ${transactionResponse.hash}...`);
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (txReceipt) => {
      resolve(`Completed with ${txReceipt.confirmations} confirmations`);
    });
  });
};

export const formatAccount = (account, from = 6, to = 4) => {
  if (!account) return " ---";
  let first = account.substring(0, from);
  let last = account.substring(account.length - to);
  return `${first}....${last}`;
};

export const getWeb3Provider = (walletProvider) => {
  let provider;
  if (window.localStorage.getItem("walletpreference") === "metamask") {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  } else if (window.localStorage.getItem("walletpreference") === "walletconnect") {
    provider = new ethers.providers.Web3Provider(walletProvider);
  } else {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }
  return provider;
};

export const getContractOwner = async ({ contractAddress, abi, walletProvider }) => {
  const provider = getWeb3Provider(walletProvider);
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return await contract.name();
};

export const getDuration = (seconds) => {
  let now = new Date();
  let date = new Date(seconds * 1000);
  let diff = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
  if (diff < 0.04) return parseInt(diff * 24 * 60) + " mins ago";
  else if (diff < 1) return parseInt(diff * 24) + " hours ago";
  else if (diff < 31) return parseInt(diff) + " days ago";
  else if (diff < 356) return parseInt(diff / 30) + " months ago";
  else return diff / 30 / 12 + " years ago";
};

export const getDate = (seconds) => {
  let date = new Date(seconds * 1000);
  date = date.toString().split(" ");
  date = date.slice(1, 4);
  date = date.join(" ");
  return date;
};

export const getDateTime = (seconds) => {
  let date = new Date(seconds * 1000);
  date = date.toString().split(" ");
  date = date.slice(1, 4);
  date = date.join(" ");
  return date;
};

export const getMaticUsdPrice = async () => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,matic-network&vs_currencies=usd"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    logError(error);
    return 0;
  }
};

export const getEstimatedGasPrice = async ({ walletProvider, account }) => {
  const provider = getWeb3Provider(walletProvider);
  const balance = await provider.getBalance(account);
  const gasPrice = await provider.getGasPrice();
  const extimatedGasPrice = await provider.estimateGas({
    // Wrapped ETH address
    to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",

    // `function deposit() payable`
    data: "0xd0e30db0",

    // 1 ether
    value: parseEther("1.0"),
  });
};

export const getDataUrl = async (file) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject("Error: ", error);
    };
  });
};

export const dataURLToFile = (dataurl, filename = "image") => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const getFile = async (url, name = "image", type = "image/png") => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], name, { type });
  return file;
};

export const isValidEmail = (email) => {
  // Regex pattern to match email addresses
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};
