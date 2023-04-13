export const FUNDME_ABI = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Send__TransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "receiver",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export const FUNDME_MATIC = "0x2bF216b484C07d3023BF80FAbdf4b0b10530D4FA";
export const FUNDME_ETHEREUM = "0x19c6Fcf4333E24C4a674Bdc0Abe8A26534bafdef";

export const FUNDME_ETHEREUM_MAINNET =
  "0x030E57179F1e3F27b945455EEb2e6e16d82628ae";
