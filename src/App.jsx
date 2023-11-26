import React from 'react';
import NavigationBar from './NavigationBar';
import HomeMainContent from './HomeMainContent';
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