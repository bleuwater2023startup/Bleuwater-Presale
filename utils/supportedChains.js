import PolygonIcon from "../assets/icon-polygon-00.svg";
import EthereumIcon from "../assets/icon-ethereum-00.svg";
import PolygonIcon2 from "../assets/icon-poly.svg";
import EthereumIcon2 from "../assets/icon-ethereum.svg";

const chainParams = {
  1: {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    nativeCurrency: { id: "ethereum", name: "Ethereum", symbol: "ETH", decimals: 18 },
    rpcUrls: ["https://mainnet.infura.io/v3/"],
    blockExplorerUrls: ["https://etherscan.io/"],
    iconUrls: [""],
  },

  5: {
    chainId: "0x5",
    chainName: "Goerli test network",
    nativeCurrency: { id: "ethereum", name: "Ethereum", symbol: "GoerliETH", decimals: 18 },
    rpcUrls: ["https://goerli.infura.io/v3/"],
    blockExplorerUrls: ["https://goerli.etherscan.io/"],
    iconUrls: [""],
  },

  137: {
    chainId: "0x89",
    chainName: "Polygon Matic",
    nativeCurrency: { id: "matic-network", name: "Matic", symbol: "MATIC", decimals: 18 },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://www.polygonscan.com/"],
    iconUrls: [""],
  },

  80001: {
    chainId: "0x13881",
    chainName: "Mumbai test network",
    nativeCurrency: { id: "matic-network", name: "Matic", symbol: "MATIC", decimals: 18 },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    iconUrls: [""],
  },
};

export async function switchChain(chainId) {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: chainId,
        },
      ],
    });
  } catch (error) {
    if (error.message.includes("Unrecognized chain ID")) {
      await addChain(chainId);
    } else {
      return error;
    }
  }
}

export async function addChain(chainId) {
  try {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [chainParams[chainId]],
    });
    return null;
  } catch (error) {
    console.log("add error: ", error);
    return error;
  }
}

export const chainIdToLabel = {
  "0x13881": "mumbai",
  "0x89": "polygon",
  "0x1": "ethereum",
  "0x5": "goerli",
};

export const labelToChainId = {
  mumbai: "0x13881",
  polygon: "0x89",
  ethereum: "0x1",
  goerli: "0x5",
};

const supportedChains = {
  1: {
    ...chainParams[1],
    iconUrls: ["/icon-ethereum-00.svg"],
    label: "Ethereum",
    chainIcon: <EthereumIcon />,
    blockIcon: <EthereumIcon2 />,
    isMainnet: true,
  },
  5: {
    ...chainParams[5],
    iconUrls: ["/icon-ethereum-00.svg"],
    label: "Goerli",
    chainIcon: <EthereumIcon />,
    blockIcon: <EthereumIcon2 />,
    isMainnet: false,
  },
  80001: {
    ...chainParams[80001],
    iconUrls: ["/icon-polygon-00.svg"],
    label: "Mumbai",
    chainIcon: <PolygonIcon />,
    blockIcon: <PolygonIcon2 />,
    isMainnet: false,
  },
  137: {
    ...chainParams[137],
    iconUrls: ["/icon-polygon-00.svg"],
    label: "Polygon",
    chainIcon: <PolygonIcon />,
    blockIcon: <PolygonIcon2 />,
    isMainnet: true,
  },
};

export default supportedChains;
