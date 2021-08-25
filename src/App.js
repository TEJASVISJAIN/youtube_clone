import './App.css';
import React from 'react';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      <Header />

      <div className="app__page">

        <Sidebar />

        <RecommendedVideos />

      </div>
      
      {/* Recommendation */}

    </div>
  );
}

export default App;
