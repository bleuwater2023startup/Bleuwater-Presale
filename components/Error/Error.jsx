// import { useRouter } from "next/router";
import BrokenIcon from "../../assets/icon-broken.svg";
import Button from "../Button/Button";
import classes from "./Error.module.css";

const Error = ({ onClick = () => {}, title, description }) => {
  const handleClick = () => {
    onClick();
    window.location.reload();
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>{title || "Something went wrong"}</div>
      <BrokenIcon className={classes.icon} />
      <div className={classes.description}>
        {description || "We are working to fix it, click the refresh button to reload page."}
      </div>
      <div className={classes.btnContainer}>
        <Button onClick={handleClick} accent>
          {description ? "Try again" : "Refresh"}
        </Button>
      </div>
    </div>
  );
};

export default Error;
