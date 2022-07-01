import { Customers } from './data';
import { VictoryChart, VictoryBar } from 'victory';


const Map = Customers.reduce((acc, curr) => {

  if (acc[curr.favorite_color]) {
    acc[curr.favorite_color]++;
  } else {
    acc[curr.favorite_color] = 1;
  }
  return acc;
}, {});

const data = Object.keys(Map).map(key => ({
  favorite_color: key, count: Map[key]
}));
export default function MyChart2() {
  return (
    <div className='chartTwo'>
      <VictoryChart domainPadding={25}>
        <VictoryBar horizontal style={{ data: { fill: '#c43a31' } }} data={data} x='favorite_color' y="count"/>
      </VictoryChart>
    </div>
  );
}