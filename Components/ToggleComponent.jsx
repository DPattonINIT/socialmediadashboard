import React from 'react';

const ToggleComponent = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
        darkMode ? 'bg-gradient-to-r from-blue-400 to-green-400' : 'bg-gray-300'
      }`}
    >
      <span
        className={`absolute left-1 top-1 bg-gray-900 w-4 h-4 rounded-full transition-transform duration-300 ${
          darkMode ? 'transform translate-x-6 bg-gray-900' : 'bg-white'
        }`}
      ></span>
    </button>
  );
};

export default ToggleComponent;