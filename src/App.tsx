import React from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <Sidebar />
        <main className="App-main">
          <Graph />
        </main>
      </div>
    </div>
  );
}

export default App;