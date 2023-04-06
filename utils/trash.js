// const { data: data_polygon, error: error_polygon } = await getPolygon(query, {
//   _account: account,
// });
// const { data: data_ethereum, error: error_ethereum } = await getEthereum(query, {
//   _account: account,
// });
// if (error_polygon && error_ethereum) {
//   setError(true);
// } else {
//   if (data_ethereum.user) {
//     const _data = {
//       user: {
//         id: data_ethereum.user.id,
//         [key]: [...data_ethereum.user[key], ...data_polygon.user[key]],
//       },
//     };
//     setData((d) => ({
//       ...d,
//       [`data_${label}`]: _data,
//     }));
//   }
// }

// import { useContext, useEffect, useState, useMemo } from "react";
// import classes from "../../../../../../styles/Utility.module.css";
// import BackIcon from "../../../../../../assets/icon-arrow.svg";
// import { useRouter } from "next/router";
// import { GET_NFT_DETAIL } from "../../../../../../utils/subgraphQuery";
// import { useQuery } from "urql";
// import { StateContext } from "../../../../../../context/state.context";
// import { setIpfsData } from "../../../../../../context/state.actions";
// import { getNftDetails } from "../../../../../../utils/ipfs";
// import Loader from "../../../../../../components/LoadingScreen/Loader/Loader";
// import { subgraphUrl } from "../../../../../../utils/subgraphClients";
// import {
//   icons as utilityIcons,
//   action as utilityActions,
//   links as utilityLinks,
// } from "../../../../../../components/Asset/Utility/UtilityData";

// const _Utility = () => {
//   const [nftDetails, setNftDetails] = useState(null);
//   const { dispatch } = useContext(StateContext);
//   const [sortedUtilities, setSortedUtilities] = useState(null);

//   const router = useRouter();
//   const {
//     query: { contract, tokenId, network },
//   } = router;

//   const [result] = useQuery({
//     query: GET_NFT_DETAIL,
//     variables: { _contractAddress: contract, _tokenId: tokenId },
//     context: useMemo(
//       () => ({
//         requestPolicy: "network-only",
//         url: subgraphUrl[network],
//       }),
//       [network]
//     ),
//   });

//   const { data, fetching: loading, error } = result;

//   const _getNftDetails = async (storedIpfsData, nfts) => {
//     const { ipfsData, details } = await getNftDetails({ storedIpfsData, nfts });
//     dispatch(setIpfsData({ ...ipfsData, ...storedIpfsData }));
//     setNftDetails(details[0]);
//   };

//   const handleUtility = (utility) => {
//     if (utility.toLowerCase() === "protected nfts") return; // trigger a popup for protected nfts
//     router.push(`${router.asPath}/${utilityLinks[utility.toLowerCase()]}`);
//   };

//   useEffect(() => {
//     if (!data) return;
//     let storedIpfsData = window.localStorage.getItem("ipfs_data");
//     storedIpfsData = JSON.parse(storedIpfsData);
//     _getNftDetails(storedIpfsData, data.collection.nfts);
//   }, [data]);

//   useEffect(() => {
//     if (!nftDetails) return;
//     const sortOrder = ["Waitlist Spot", "E-Learning Class", "One-on-one call", "Protected NFTs"];
//     const indexedArray = nftDetails.utilities.map((value) => {
//       return { value, index: sortOrder.indexOf(value.utility) };
//     });
//     indexedArray.sort((a, b) => a.index - b.index);
//     const sortedArray = indexedArray.map((item) => item.value);
//     setSortedUtilities(sortedArray);
//   }, [nftDetails]);

//   return (
//     <div className={classes.container}>
//       <div onClick={() => router.back()} className={classes.arrow}>
//         <BackIcon />
//       </div>
//       <div className={classes.heading}>NFT Utilities</div>
//       <div className={classes.description}>
//         <div>Below are the utilities tied to your NFT</div>
//         <div>
//           <span className={classes.accent}>Note:</span>{" "}
//           <span>
//             Some of the utilities are time-based make sure to use them before validity period ends
//           </span>
//         </div>
//       </div>
//       {error || data?.collection.nfts.length === 0 ? (
//         <Error
//   title={"Failed to fetch results"}
//   description={"Please check network connection and try again"}
// />
//       ) : loading ? (
//         <Loader />
//       ) : (
//         <div className={classes.utilityContainer}>
//           {sortedUtilities &&
//             sortedUtilities.map(({ utility }, idx) => (
//               <div
//                 onClick={() => {
//                   handleUtility(utility);
//                 }}
//                 key={idx}
//                 className={classes.utility}>
//                 <div className={classes.utilityIcon}>{utilityIcons[utility.toLowerCase()]}</div>
//                 <div className={classes.name}>{utility}</div>
//                 <div className={classes.button}>{utilityActions[utility.toLowerCase()]}</div>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default _Utility;

// const subscribeToMessage = () => {
//   getSharedMessages({
//     receiver: "0x91e66ffB1c2CFA3b889c84468398ab3782EABd7C".toLowerCase(),
//     sender: account.toLowerCase(),
//   });
// };
