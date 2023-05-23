import React from "react";
import "./button.css";

const Button = ({ onClick, text, link, disabled, className }) => {
  // const handleClick = () => {
  //   if (link) {
  //     window.open(link, "_blank");
  //   } else if (onClick) {
  //     onClick();
  //   }
  // };
  // const levelClass = `button button-${className}`;
  return (
    <button>
      <div class="frame">
        <div class="hex-outer h1"></div>
        <div class="hex-outer h2"></div>
        <div class="hex-outer h3"></div>
        <div class="hex-inner h1"></div>
        <div class="hex-inner h2"></div>
        <div class="hex-inner h3"></div>
        <div class="label">{text}</div>
      </div>
    </button>
  );
};

export default Button;
