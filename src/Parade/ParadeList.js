import Parade from './Parade';

export default function ParadeList({ swims }) {
  return (
    <div className='lineUp'>
      {
        swims.map((swim, i) => <Parade swimming={swim} key={swim + i} />)
      }
    </div>
  );
}