import { useCollapse } from "react-collapsed";
import arrowBack from "./../../assets/arrow-back.png";
import { useState } from "react";
import "./Collapse.scss";

export function Collapse({ header, content, classCollapse, classContent }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const contentList = typeof content === "string" ? [content] : content;

  return (
    <div className={`collapsible ${classCollapse} `}>
      <div
        className="header"
        style={{
          borderRadius: isExpanded && "4px",
        }}
      >
        <span>{header}</span>
        <img
          className="arrowBack"
          src={arrowBack}
          alt={"arrow back picture"}
          {...getToggleProps()}
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", // Rotate on click
            transition: "transform 0.3s, width 0.3s", // Smooth transition
          }}
        />
      </div>
      <div {...getCollapseProps()}>
        <ul className={`${classContent}`}>
          {contentList.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
