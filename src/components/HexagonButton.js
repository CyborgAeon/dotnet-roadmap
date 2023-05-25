import React from "react";
import "../sass/hexagonButton.scss";

const HexagonButton = ({ onClick, text, link, disabled, level }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  const getButtonClassName = (level) => {
    let className = "button ";
    className += `button-${level}`;
    return className;
  };

  return (
    <HexagonButton
      onClick={handleClick}
      disabled={disabled}
      className={getButtonClassName()}
    >
      {text}
    </HexagonButton>
  );
};

export default HexagonButton;
