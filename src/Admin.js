import React from 'react';
import MyChart1 from './services/MyChart';
import './App.css';
import MyChart2 from './services/Chart2';
import MyTable from './Table';

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
      <div>
        <h1>TABLE</h1>
        <MyTable/>
      </div>
    </div>
  );
}
