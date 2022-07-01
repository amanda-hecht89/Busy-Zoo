import { Customers } from './data';
import React from 'react';
import { VictoryChart } from 'victory';

const countMap = Customers.reduce((acc, curr) => {
  if (acc[curr.pet_type]) {
    acc[curr.pet_type]++;
  } else {
    acc[curr.pet_type] = 1;
  }
  return acc;
}, {});

const chartData = Object.keys(countMap).map(key => ({
  pet_type: key, count: countMap[key]
}));


export default function MyChart() {
  return (
    <VictoryChart data={chartData}>
    </VictoryChart>
  );
}