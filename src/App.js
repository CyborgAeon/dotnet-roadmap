import React from 'react';
import Button from './components/button';

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleButtonClick} text="Display Text" level="junior" />
      <Button link="https://www.example.com" text="Open Link in New Tab" level="mid-level"/>
      <Button text="Disabled Button" disabled level="senior"/>
    </div>
  );
};

export default App;
