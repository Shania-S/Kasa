import { useCollapse } from "react-collapsed";
import arrowBack from "./../../assets/arrow-back.png";
import { useState } from "react";
import "./Collapse.scss";

export function Collapse({ header, content, classCollapse, classContent }) {
  const [display, setDisplay, isDisplayed] = useState(false);
  const contentList = typeof content === "string" ? [content] : content;

  const toggleElement = () => {
    setDisplay(!display);
  };

  return (
    <div className={`collapsible ${classCollapse} `}>
      <div
        className="header"
        style={{
          borderRadius: display && "4px",
        }}
      >
        <span>{header}</span>
        <img
          onClick={toggleElement}
          className="arrowBack"
          src={arrowBack}
          alt={"arrow back picture"}
          style={{
            transform: display ? "rotate(180deg)" : "rotate(0deg)", // Rotate on click
            transition: "transform 0.3s, width 0.3s", // Smooth transition
          }}
        />
      </div>
      {display && (
        <div>
          <ul className={`${classContent}`}>
            {contentList.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
