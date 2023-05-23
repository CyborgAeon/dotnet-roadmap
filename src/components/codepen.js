import React from "react";
import "./codepen.css";

const Button = ({ onClick, text, link, disabled, className }) => {
  return (
    <button>
      <div class="brame">
        <div class="cex-outer c1"></div>
        <div class="cex-outer c2"></div>
        <div class="cex-outer c3"></div>
        <div class="cex-inner c1"></div>
        <div class="cex-inner c2"></div>
        <div class="cex-inner c3"></div>
        <div class="label">{text}</div>
      </div>
    </button>
  );
};

export default Button;
