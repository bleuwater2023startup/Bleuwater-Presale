import classes from "./FeaturesCard.module.css";

const FeaturesCard = ({ feature: { name, description, icon, background, iconBg } }) => {
  return (
    <div className={classes.container}>
      <div className={classes.bgWrapper}>
        <div style={{ background: background }} className={classes.bg} />
        <div style={{ background: iconBg }} className={classes.icon}>
          {icon}
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.name}>{name}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
};

export default FeaturesCard;
