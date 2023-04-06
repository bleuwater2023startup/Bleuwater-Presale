import { createClient } from "urql";

export const subgraphUrl = {
  80001: process.env.NEXT_PUBLIC_SUBGRAPH_MUMBAI,
  mumbai: process.env.NEXT_PUBLIC_SUBGRAPH_MUMBAI,
  137: process.env.NEXT_PUBLIC_SUBGRAPH_MATIC,
  polygon: process.env.NEXT_PUBLIC_SUBGRAPH_MATIC,
  5: process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI,
  goerli: process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI,
  1: process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI,
  ethereum: process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI,
};

export const POLYGON_CLIENT = createClient({
  url: process.env.NEXT_PUBLIC_SUBGRAPH_MATIC,
});

export const ETHEREUM_CLIENT = createClient({
  url: process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI,
});

export const MUMBAI_CLIENT = createClient({
  url: process.env.NEXT_PUBLIC_SUBGRAPH_MUMBAI,
});

export const GOERLI_CLIENT = createClient({
  url: process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI,
});
