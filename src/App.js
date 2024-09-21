import React from 'react';
import BannerImage from './Components/BannerImage';
import AlbumMaker from './Components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
          <h1>Welcome to My First React App</h1>
          <h3>Prithik Vijayakumar</h3>
          <AlbumMaker/>
        </div>
      </header>
    </div>
  );
}

export default App;
