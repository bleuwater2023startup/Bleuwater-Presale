import { ETHEREUM_CLIENT, GOERLI_CLIENT, MUMBAI_CLIENT, POLYGON_CLIENT } from "./subgraphClients";

export const getPolygon = async (query, variables, requestPolicy = "cache-and-network") => {
  const { data, error } = await POLYGON_CLIENT.query(query, variables, {
    requestPolicy,
  }).toPromise();
  return { data, error };
};

export const getEthereum = async (query, variables, requestPolicy = "cache-and-network") => {
  const { data, error } = await ETHEREUM_CLIENT.query(query, variables, {
    requestPolicy,
  }).toPromise();
  return { data, error };
};

export const getMumbai = async (query, variables, requestPolicy = "cache-and-network") => {
  const { data, error } = await MUMBAI_CLIENT.query(query, variables, {
    requestPolicy,
  }).toPromise();
  return { data, error };
};

export const getGoerli = async (query, variables, requestPolicy = "cache-and-network") => {
  const { data, error } = await GOERLI_CLIENT.query(query, variables, {
    requestPolicy,
  }).toPromise();
  return { data, error };
};
