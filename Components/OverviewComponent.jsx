import React from 'react';
import DataComponent from './DataComponent';

const OverviewDataComponent = ({ darkMode, facebookData, twitterData, instagramData, youtubeData }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Overview - Today</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Facebook Overview Data */}
        <DataComponent 
          label="Page Views"
          value={facebookData.pageViews}
          percentage={facebookData.pageViewsGrowth}
          platform="facebook"
          darkMode={darkMode}
        />
        <DataComponent 
          label="Likes"
          value={facebookData.likes}
          percentage={facebookData.likesGrowth}
          platform="facebook"
          darkMode={darkMode}
        />
        
        {/* Instagram Overview Data */}
        <DataComponent 
          label="Likes"
          value={instagramData.likes}
          percentage={instagramData.likesGrowth}
          platform="instagram"
          darkMode={darkMode}
        />
        <DataComponent 
          label="Profile Views"
          value={instagramData.profileViews >= 1000 ? `${instagramData.profileViews / 1000}k` : instagramData.profileViews}
          percentage={instagramData.profileViewsGrowth}
          platform="instagram"
          darkMode={darkMode}
        />
        
        {/* Twitter Overview Data */}
        <DataComponent 
          label="Retweets"
          value={twitterData.retweets}
          percentage={twitterData.retweetsGrowth}
          platform="twitter"
          darkMode={darkMode}
        />
        <DataComponent 
          label="Likes"
          value={twitterData.likes}
          percentage={twitterData.likesGrowth}
          platform="twitter"
          darkMode={darkMode}
        />
        
        {/* YouTube Overview Data */}
        <DataComponent 
          label="Likes"
          value={youtubeData.likes}
          percentage={youtubeData.likesGrowth}
          platform="youtube"
          darkMode={darkMode}
        />
        <DataComponent 
          label="Total Views"
          value={youtubeData.totalViews}
          percentage={youtubeData.totalViewsGrowth}
          platform="youtube"
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default OverviewDataComponent;
  