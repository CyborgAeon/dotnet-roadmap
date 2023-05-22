import './button.css'
import React from 'react';

const Button = ({ onClick, text, link, disabled, level }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} disabled={disabled} level={getLevel}>
      {text}
    </button>
  );
};

const getLevel = (level) => {
    let className = 'button ';
    switch (level) {
      case 'junior':
        className += 'red';
        break;
      case 'mid-level':
        className += 'orange';
        break;
      case 'high-mid-level':
        className += 'blue';
        break;
      case 'senior':
        className += 'green';
        break;
      case 'dev-ops':
        className += 'purple';
        break;
      case 'data-ops':
        className += 'black';
        break;
      case 'legacy':
        className += 'grey';
        break;
      default:
        className += 'default';
        break;
    }
    return className;
  };

export default Button;