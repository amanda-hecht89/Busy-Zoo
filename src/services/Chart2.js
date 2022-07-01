import { Customers } from './data';
import { VictoryChart, VictoryBar } from 'victory';


const importedData = Customers.reduce((acc, curr) => {
  if (acc[curr.favorite_color]) {
    acc[curr.favorite_color]++;
  } else {
    acc[curr.favorite_color] = 1;
  }
  return acc;
}, {});
  
export default function MyChart2() {
  return (
    <div className='chartTwo'>
      <VictoryChart domainPadding={25}>
        <VictoryBar data={importedData} x="favorite_color" y="count"/>
      </VictoryChart>
    </div>
  );
}