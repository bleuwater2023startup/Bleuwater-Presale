import classes from "./Feedback.module.css";
import CloseIcon from "../../assets/icon-close.svg";

import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import { createFeedback } from "../../firebase/firebase";
import { StateContext } from "../../context/state.context";
import { setModal } from "../../context/state.actions";

const categories = ["Problem", "Suggestion", "Complaint", "Other"];

const Feedback = () => {
  const [activeRating, setActiveRating] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Problem");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { dispatch } = useContext(StateContext);

  const handleReset = () => {
    setActiveCategory("Problem");
    setActiveRating(null);
    setInputValue("");
    setSuccess(false);
    setError(false);
  };

  const handleSend = async () => {
    if (!inputValue) return setError(true);
    setSuccess(true);
    await createFeedback({
      rating: activeRating,
      category: activeCategory,
      feedback: inputValue,
    });
    setTimeout(() => {
      handleReset();
      handleClose();
    }, 1000);
  };

  const handleClose = () => {
    dispatch(setModal(""));
  };

  useEffect(() => {
    handleReset();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.feedbackContainer}>
          {success && (
            <div className={classes.thankYouModal}>
              Thank you for your feedback
            </div>
          )}
          <div className={classes.heading}>
            <div className={classes.mainText}>Feedback</div>
            <div onClick={handleClose} className={classes.closeIcon}>
              <CloseIcon />
            </div>
          </div>

          <div className={classes.title}>
            Hello, we’d love to hear your thoughts about Bleuwater...
          </div>
          <div className={classes.description}>
            Firstly, how likely are you to recommend Bleuwater on a scale of 0 -
            10?
          </div>

          <div className={classes.ratingsContainer}>
            {Array(10)
              .fill(null)
              .map((el, idx) => (
                <div
                  onClick={() => setActiveRating(idx + 1)}
                  className={`${classes.rating} ${
                    activeRating === idx + 1 && classes.active
                  }`}
                  key={idx}
                >
                  {idx + 1}
                </div>
              ))}
          </div>

          <div className={classes.description}>
            Now, if you have a specific feedback, please select any category
            below...{" "}
          </div>

          <div className={classes.textBox}>
            <div className={classes.categories}>
              {categories.map((category, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveCategory(category)}
                  className={`${classes.category} ${
                    activeCategory === category && classes.active
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>

            <div className={classes.title}>What’s the {activeCategory}?</div>
            <div className={classes.description}>
              Please enter your feedback in the box below and then click “Send
              Feedback”
            </div>
            <textarea
              className={`${error && classes.error}`}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setError(false);
              }}
            />
          </div>

          <div onClick={handleSend} className={classes.sendBtn}>
            <Button accent dark>
              Send Feedback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
