import React from "react";
import Button from "./components/button";
import Codepen from "./components/codepen";

const App = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button
        onClick={handleButtonClick}
        text="My version"
        className="junior"
      />
    </div>
  );
};

export default App;
