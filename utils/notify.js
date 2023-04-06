export const validationErrorMessage = {
  type: "error",
  message: "Fill the required fields.",
};

// *****************************************upload to ipfs***********************************************
export const beforeIpfs = {
  title: "We are uploading your assets to IPFS",
  description: "This process may take a few minutes. Please wait and avoid refreshing the page.",
};

export const beforeIpfsCollection = (current, total) => ({
  title: `We are uploading ${current + 1} of ${total} of your assets to IPFS`,
  description: "This process may take a few minutes. Please wait and avoid refreshing the page.",
});

export const onIpfs = {
  title: "Almost done",
  description: "Please, do not refresh your page.",
};

export const successIpfs = {
  type: "success",
  message: "Your assets has been uploaded successfully.",
};

export const errorIpfs = {
  type: "error",
  message:
    "We encountered an issue uploading your assets. please ensure that you have a stable network connection.",
};
// ***************************************add royalty split******************************************

export const beforeSplit1 = {
  title: "Your royalty split creation is currently in progress.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const beforeSplit2 = {
  title: "Let's add the split contract to your collection.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onSplit = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few minutes.",
};

export const successSplit = {
  type: "success",
  message: "The royalty split has been added successfully.",
};

export const errorSplit = {
  type: "error",
  message:
    "We encountered an issue add royalties to your collection. please ensure that you have a stable network connection and sufficient funds for gas fees.",
};

// *************************************mint nft****************************************************

export const beforeMint = (current, total) => ({
  title: `Your NFT creation for batch ${current + 1} of ${total} is currently in progress.`,
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
});

export const onMint = () => ({
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
});

export const successMint = (mintType) => ({
  type: "success",
  message: `You have successfully minted your ${
    mintType === "Collection" ? "NFTs" : "NFT"
  } to the blockchain.`,
});

export const errorMint = (mintType) => ({
  type: "error",
  message: `We encountered an issue creating your ${
    mintType === "Collection" ? "NFTs" : "NFT"
  }. please ensure that you have a stable network connection and sufficient funds for gas fees.`,
});

// *************************************create collection***************************************************

export const beforecreate = {
  title: "Your contract creation is currently in progress.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onCreate = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const successCreate = {
  type: "success",
  message:
    "Your NFT collection has been successfully created. You may now proceed to mint your NFTs",
};

export const errorCreate = {
  type: "error",
  message:
    "We encountered an issue creating your collection. please ensure that you have a stable network connection and sufficient funds for gas fees.",
};

// **************************************buy nft******************************************

export const beforeBuying = {
  title: "We are currently processing your purchase.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onBuying = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const successBuying = {
  type: "success",
  message: "Your have successfully purchased an NFT. 'Refresh metadata' to see updated changes.",
};

export const errorBuying = {
  type: "error",
  message:
    "We encountered an issue processing your purchase. please ensure that you have a stable network connection and sufficient funds for gas fees.",
};

// **************************************list nft******************************************

export const beforeListing = {
  title: "Your NFT listing is currently in progress.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onListing = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const beforeApproval = {
  title: "Approve to list your NFT in this marketplace.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onApproval = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const successListing = {
  type: "success",
  message: "Your NFT has been successfully listed. 'Refresh metadata' to see updated changes.",
};

export const errorListing = {
  type: "error",
  message:
    "We encountered an issue listing your NFT. please ensure that you have a stable network connection and sufficient funds for gas fees.",
};

// **************************************cancel listing******************************************

export const beforeCanceling = {
  title: "You are about to unlist an NFT.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onCanceling = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const successCanceling = {
  type: "success",
  message: "Your have successfully unlisted your NFT. 'Refresh metadata' to see updated changes.",
};

export const errorCanceling = {
  type: "error",
  message:
    "We encountered an issue unlisting your NFT. please ensure that you have a stable network connection and sufficient funds for gas fees.",
};

// **************************************update listing******************************************

export const beforeUpdate = {
  title: "You are about to change your NFT price.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onUpdate = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const successUpdate = {
  type: "success",
  message: "Your have successfully updated your NFT. 'Refresh metadata' to see updated changes.",
};

export const errorUpdate = {
  type: "error",
  message:
    "We encountered an issue unlisting your NFT. please ensure that you have a stable network connection and sufficient funds for gas fees.",
};

// **************************************update listing******************************************

export const beforeTransfer1 = {
  title: "Checking your eligibility to transfer this NFT.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const beforeTransfer2 = {
  title: "You are about to transfer your NFT.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onTransfer = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const successTransfer = {
  type: "success",
  message: "Your have successfully transfered your NFT.",
};

export const errorTransfer = {
  type: "error",
  message:
    "We encountered an issue transferring your NFT. Reach out to the collection owner to troubleshoot.",
};

// ***********************************withdraw royalties***************************************

export const beforeWithdraw = {
  title: "You are about to transfer your earnings to your wallet.",
  description:
    "Please check your wallet, as you will be prompted to confirm this transaction from within it.",
};

export const onWithdraw = {
  title: "Thank you for your confirmation",
  description: "Your transaction is being processed. This may take a few miniutes.",
};

export const successWithdraw = {
  type: "success",
  message: "Your have successfully transfered your earnings to your wallet.",
};

export const errorWithdraw = {
  type: "error",
  message: "We encountered an issue transferring your fund to your wallet.",
};
// ***************************random****************************
export const switchAccountInfo = {
  type: "info",
  message: "New account detected! Switch to the previous account or Create new",
};

// withdraw royalty, release royalty
