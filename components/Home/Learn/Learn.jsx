import { useRef, useState, useEffect } from "react";
import Card from "./Card";
import classes from "./Learn.module.css";
import { data } from "./Learn.script";
import ChevronIcon from "../../../assets/chevron.svg";
import FadeAnimation from "../../FadeAnimation/FadeAnimation";

const Learn = () => {
  const [moveCount, setMoveCount] = useState(0);
  const [listContainerWidth, setListContainerWidth] = useState(0);
  const [pageLength, setPageLength] = useState([]);
  const [cardWidth, setCardWidth] = useState(20 * 16);
  const [pageCount, setPageCount] = useState(4);
  const listContainerRef = useRef();

  const handlePrev = () => {
    setListContainerWidth(listContainerRef.current.offsetWidth);
    if (pageLength + moveCount <= 0) return;
    setMoveCount((mc) => mc - 1);
  };

  const handleNext = () => {
    setListContainerWidth(listContainerRef.current.offsetWidth);
    if (moveCount >= 0) return;
    setMoveCount((mc) => mc + 1);
  };

  const calcCarouselWidth = () => {
    if (listContainerRef.current) {
      let windowWidth = window.innerWidth;
      const containerWidth = listContainerRef.current.offsetWidth;
      setListContainerWidth(containerWidth);
      if (windowWidth >= 1200) {
        setPageCount(4);
        let offset = containerWidth - 16 * 3;
        setCardWidth(offset / 4);
      } else if (windowWidth >= 768) {
        setPageCount(3);
        let offset = containerWidth - 16 * 2;
        setCardWidth(offset / 3);
      } else if (windowWidth >= 480) {
        setPageCount(2);
        let offset = containerWidth - 16 * 1;
        setCardWidth(offset / 2);
      } else {
        setPageCount(2);
        let offset = containerWidth;
        setCardWidth(offset / 1);
      }
    }
  };

  useEffect(() => {
    const numberOfPages = Math.floor(data.length / pageCount);
    setPageLength(numberOfPages);
    // setMoveCount(0);
  }, [data, pageCount]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      calcCarouselWidth();
    });
    calcCarouselWidth();
  }, []);

  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.mainText}>Unlock your digital assets with the power of NFTs</div>
        <div className={classes.subText}>Learn the basics of NFTs and Smart Contracts</div>
      </FadeAnimation>
      <div ref={listContainerRef} className={classes.listWrapper}>
        <div
          onClick={handleNext}
          className={`${classes.leftCtrl} ${moveCount < 0 && classes.active}`}>
          <ChevronIcon className={classes.icon} />
        </div>
        <div
          onClick={handlePrev}
          className={`${classes.rightCtrl} ${pageLength + moveCount > 0 && classes.active}`}>
          <ChevronIcon className={classes.icon} />
        </div>
        <FadeAnimation>
          <div
            style={{
              transform: `translatex(${moveCount * listContainerWidth + moveCount * 16}px)`,
            }}
            className={classes.listContainer}>
            {data.map((content, idx) => (
              <Card key={idx} content={content} width={cardWidth} />
            ))}
          </div>
        </FadeAnimation>
      </div>
    </div>
  );
};

export default Learn;
