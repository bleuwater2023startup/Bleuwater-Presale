import classes from "./CardLoader.module.css";
import Skeleton from "@mui/material/Skeleton";

const CardLoader = ({ explore, flex }) => {
  return (
    <div style={{ maxWidth: flex ? "26em" : "32em" }} className={classes.container}>
      <div
        style={{
          minWidth: explore ? "20em" : "100%",
          width: "100%",
        }}
        className={classes.wrapper}>
        <Skeleton animation="wave" variant="rounded" width="100%" height={200} />
        <Skeleton animation="wave" variant="rounded" width="40%" height={30} />
        <Skeleton animation="wave" variant="rounded" width="100%" height={80} />
      </div>
    </div>
  );
};

export default CardLoader;
