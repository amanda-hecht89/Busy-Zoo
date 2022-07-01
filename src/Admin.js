import React from 'react';
import MyChart1 from './services/MyChart';
import './App.css';
import MyChart2 from './services/Chart2';

export default function App() {
  return (
    <div>
      <div>
        <h1>CHART 1</h1>
        <MyChart1/>
      </div>
      <div>
        <h1>CHART 2</h1>
        <MyChart2/>
      </div>
    </div>
  );
}
