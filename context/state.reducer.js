import { stateActionTypes } from "./state.types";

export const INITIAL_STATE = {
  dev_mode: process.env.NEXT_PUBLIC_DEV_MODE,
  modal: "",
  account: "",
  chainId: "",
  walletProvider: null,
  isDev: process.env.NODE_ENV === "development",
  accountNfts: [],
  activeToken: {},
  ipfsData: {},
  previewCollection: false,
  mintData: {
    "Contract Name": "",
    Symbol: "",
    Name: "",
    File: null,
    Description: "",
    Attributes: [],
    Amount: "1",
    Utilities: [],
    Royalty: [],
    MintType: "",
    Network: "",
  },
  notification: {
    type: "success", //enum error, success, warning, info,
    message: "",
  },
  loadingScreen: {
    title: "",
    description: "",
  },
  createSuccessModal: {
    name: "",
    hash: "",
    mintType: "",
  },
  activeUtilityParams: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case stateActionTypes.SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case stateActionTypes.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case stateActionTypes.SET_CHAINID:
      return {
        ...state,
        chainId: action.payload,
      };
    case stateActionTypes.SET_WALLET_PROVIDER:
      return {
        ...state,
        walletProvider: action.payload,
      };
    case stateActionTypes.SET_ACCOUNT_NFTS:
      return {
        ...state,
        accountNfts: action.payload,
      };
    case stateActionTypes.SET_ACTIVE_TOKEN:
      return {
        ...state,
        activeToken: action.payload,
      };
    case stateActionTypes.SET_PREVIEW_COLLECTION:
      return {
        ...state,
        previewCollection: action.payload,
      };
    case stateActionTypes.SET_IPFS_DATA:
      return {
        ...state,
        ipfsData: action.payload,
      };
    case stateActionTypes.SET_MINTDATA:
      return {
        ...state,
        mintData: action.payload,
      };
    case stateActionTypes.SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    case stateActionTypes.SET_LOADING_SCREEN:
      return {
        ...state,
        loadingScreen: action.payload,
      };
    case stateActionTypes.SET_CREATE_SUCCESS_MODAL:
      return {
        ...state,
        createSuccessModal: action.payload,
      };
    case stateActionTypes.SET_ACTIVE_UTILITY_PARAMS:
      return {
        ...state,
        activeUtilityParams: action.payload,
      };
    default:
      return state;
  }
};
