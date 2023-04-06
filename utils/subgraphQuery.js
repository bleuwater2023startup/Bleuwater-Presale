// import { gql } from "@apollo/client";
// // convert query params to lower case

/**
 * ############################################### Beginning of Dashboard ##################################
 */
export const GET_USER_COLLECTED_NFTS = `
  query ($_account: String) {
    user(id: $_account) {
      id
      nfts(orderBy: tokenId, orderDirection: desc, first: 1000) {
        id
        nftAddress
        tokenId
        tokenURI
        txHistory(orderBy: txDate, orderDirection: desc) {
          from
          id
          price
          to
          txDate
          txId
          txType
        }
        collection {
          creator {
            id
          }
          name
          chainId
        }
        owner {
          id
        }
      }
    }
  }
`;

export const GET_USER_CREATED_NFTS = `
  query ($_account: String) {
    user(id: $_account) {
      id
      collections(orderBy: createdAt, orderDirection: desc) {
        id
        name
        chainId
        nfts(first: 1000) {
          id
          nftAddress
          tokenId
          tokenURI
          txHistory(orderBy: txDate, orderDirection: desc) {
            from
            id
            price
            to
            txDate
            txId
            txType
          }
          collection {
            creator {
              id
            }
            name
            chainId
          }
          owner {
            id
          }
        }
      }
    }
  }
`;

export const GET_ACTIVE_LISTING = `
  query ($_account: String) {
    user(id: $_account) {
      id
      nfts(first: 1000) {
        id
        nftAddress
        tokenId
        tokenURI
        txHistory(orderBy: txDate, orderDirection: desc, first: 1) {
          from
          id
          price
          to
          txDate
          txId
          txType
        }
        collection {
          creator {
            id
          }
          name
          chainId
        }
        owner {
          id
        }
      }
    }
  }
`;

// export const GET_MY_NFTS= ``;

/**
 * ############################################### Beginning of Explore ##################################
 */

export const GET_1of1_COLLECTIONS = `
  query ($_id: String, $_chainId: String) {
    collections(where: { type: Single, creator: $_id, chainId: $_chainId }, orderBy: createdAt, orderDirection: desc) {
      id
      name
      symbol
      chainId
      nfts(first: 1000) {
        id
        royaltyInfo
      }
    }
  }
`;

export const GET_COLLECTIONS = `
  {
    collections(orderBy: createdAt, orderDirection: desc) {
      name
      id
      chainId
      nfts(first: 1000) {
        tokenURI
      }
    }
  }
`;

export const GET_COLLECTION_NFTS = `
  query ($_id: String) {
    collection(id: $_id) {
      id
      name
      symbol
      type
      createdAt
      chainId
      creator {
        id
      }
      nfts(first: 1000) {
        id
        tokenId
        tokenURI
        nftAddress
        owner {
          id
        }
        txHistory(orderBy: txDate, orderDirection: desc) {
          from
          to
          txDate
          txType
          price
          txId
          royalty {
            payees {
              account
            }
            shares {
              amount
            }
            royaltyFeesInBips
          }
        }
      }
      priceHistory(orderBy: price) {
        price
      }
      activities(orderBy: txDate, orderDirection: desc) {
        id
        txType
        price
        from
        to
        txDate
        txId
        royalty {
          payees {
            account
          }
          shares {
            amount
          }
          royaltyFeesInBips
        }
        nft {
          tokenId
          tokenURI
        }
      }
    }
  }
`;

/**
 * ############################################### Beginning of Nft ##################################
 */

export const GET_NFT_DETAIL = `
  query ($_contractAddress: String, $_tokenId: String) {
    collection(id: $_contractAddress) {
      id
      name
      symbol
      type
      createdAt
      chainId
      nfts(where: { tokenId: $_tokenId }) {
        id
        tokenId
        tokenURI
        nftAddress
        royaltyInfo
        txHistory(orderBy: txDate, orderDirection: desc) {
          from
          to
          txDate
          txType
          price
          txId
          royalty {
            payees {
              account
            }
            shares {
              amount
            }
            royaltyFeesInBips
          }
        }
        owner {
          id
        }
        collection {
          creator {
            id
          }
          name
          chainId
        }
      }
    }
  }
`;

export const GET_SIMILAR_NFTS = `
  query ($_contractAddress: String) {
    collection(id: $_contractAddress) {
      id
      name
      chainId
      nfts {
        tokenId
        tokenURI
        nftAddress
      }
    }
  }
`;

export const GET_ROYALTIES = `
  query ($_account: String) {
    royalties(where: { payees_: { account_contains: $_account } }) {
      id
      paymentSplitter
      royaltyFeesInBips
      payees {
        account
      }
      collection {
        id
        name
      }
    }
  }
`;

/**
 * ############################################### Beginning of Search ##################################
 */

export const GET_SEARCH = `
  query ($_value: String) {
    Collection: collections(where: { name_contains_nocase: $_value }) {
      id
      name
      chainId
    }
    Address: collections(where: { id: $_value }) {
      id
      name
      chainId
    }
    Account: users(where: { id: $_value }) {
      id
    }
    NFTs: nfts(where: { id: $_value }) {
      nftAddress
      tokenId
      id
      collection {
        chainId
      }
    }
  }
`;
