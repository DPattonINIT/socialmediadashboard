import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DashCard from './components/DashCard';
import OverviewData from './components/OverviewData';
import Loader from './components/Loader';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      const response = await fetch('https://darrylssocialmediaapi-dcejgabvbfbrc7fy.westus-01.azurewebsites.net/SocialMedia/stats');
      
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-xl">Failed to load data. Please try again later.</p>
          </div>
        ) : stats ? (
          <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} totalFollowers={stats.totalFollowers} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {['facebook', 'twitter', 'instagram', 'youtube'].map(platform => (
                <DashCard key={platform} platform={platform} stats={stats[platform]} darkMode={darkMode} />
              ))}
            </div>
            <OverviewData stats={stats} darkMode={darkMode} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
