import React from "react";
import HexagonButton from "./components/HexagonButton";

const App = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <HexagonButton
        onClick={handleButtonClick}
        text="My version"
        className="junior"
      />
    </div>
  );
};

export default App;
