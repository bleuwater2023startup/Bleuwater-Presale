import classes from "./Card.module.css";

const Card = ({ content, width }) => {
  const { image, title, description, link } = content;

  return (
    <div style={{ width: width }} className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.button}>Read all</div>
      </div>
    </div>
  );
};

export default Card;
