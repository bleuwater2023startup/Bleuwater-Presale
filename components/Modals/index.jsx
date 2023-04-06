import { useContext } from "react";
import { StateContext } from "../../context/state.context";
import { modalTypes } from "../../context/state.types";
import ConnectModal from "./ConnectModal/ConnectModal";

const Modals = () => {
  const { modal } = useContext(StateContext);

  return (
    <div>{modalTypes.CONNECT_WALLET === modal ? <ConnectModal /> : null}</div>
  );
};

export default Modals;
