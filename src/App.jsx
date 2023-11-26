import React from 'react';
import NavigationBar from './views/NavigationBarView';
import HomeMainContent from './views/HomeMainContentView';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <HomeMainContent />
    </div>
  );
}

export default App;