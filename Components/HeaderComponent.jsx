import React from 'react';
import ToggleComponent from './ToggleComponent';

const HeaderComponent = ({ darkMode, setDarkMode, totalFollowers }) => {
  return (
    <header className="py-8 md:py-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-6 md:pb-8 mb-6 md:mb-8 border-gray-700">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold">Social Media Dashboard</h1>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Followers: {totalFollowers?.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center justify-between md:justify-end">
          <span className={`text-sm mr-2 md:mr-4 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Dark Mode
          </span>
          <ToggleComponent 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;