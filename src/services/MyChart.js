//import { Customers } from './data';
import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

const myData = [
  { quarter: 1, profits: 15872 },
  { quarter: 2, profits: 12794 },
  { quarter: 3, profits: 14974 },
  { quarter: 4, profits: 23873 },
];
export default function MyChart1() {
  return (
    <div className='chartOne'>
      <VictoryChart domainPadding={25}>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Q1', 'Q2', 'Q3', 'Q4']}/>
        <VictoryAxis dependentAxis tickFormat={(x) =>(`$${x / 100}`)} />
        <VictoryLine data={myData} x="quarter" y="profits"/>
      </VictoryChart>
    </div>
  );
}



