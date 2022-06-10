import './App.css';
import { useState } from 'react';
import ParadeList from './Parade/ParadeList';

function App() {

  const [nemoSize, setNemoSize] = useState(100);
  const [darlaSize, setDarlaSize] = useState(100);
  const [swims, setSwims] = useState(['dory', 'marlin', 'bruce', 'nigel', 'mine']);

  function handleBruceClick() {
    swims.push('bruce');
    setSwims(swims.slice());
  }

  function handleMarlinClick() {
    swims.push('marlin');
    setSwims(swims.slice());
  }

  function handleDoryClick() {
    swims.push('dory');
    setSwims(swims.slice());
  }

  function handleNigelClick() {
    swims.push('nigel');
    setSwims(swims.slice());
  }
  
  function handleMineClick() {
    swims.push('mine');
    setSwims(swims.slice());
  }








  return (
    <div className="App">
      <heaader>Welcome to my App!</heaader>
      <div className="darlaFight">
        <div className='fishie'>
          <img src="./images/nemo1.png" width={nemoSize}></img>
          <div className='button'>
            <button onClick={() => setNemoSize(nemoSize + 3)}>Settle Bag</button>
            <button onClick={() => setDarlaSize(darlaSize - 3)}>Get Caught</button>
          </div>
        </div>
        <div className='fishie'>
          <img src="./images/darla2.png" width={darlaSize}></img>
          <div className='button'>
            <button onClick={() => setDarlaSize(darlaSize + 3)}>FISHIE!!!!!!</button>
            <button onClick={() => setNemoSize(nemoSize - 3)}>Shake Bag</button>
          </div>
        </div>
      </div>
      <div className='reefDentist'></div>
      <ParadeList swim={swims} />
      <div className='buttons'>
        <button onClick={handleDoryClick}>Dory</button>
        <button onClick={handleMarlinClick}>Marlin</button>
        <button onClick={handleBruceClick}>Bruce</button>
        <button onClick={handleNigelClick}>Nigel</button>
        <button onClick={handleMineClick}>MINE!</button>
      </div>
    </div>
  );
}

export default App;
