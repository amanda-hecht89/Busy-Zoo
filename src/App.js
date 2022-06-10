import './App.css';
import { useState } from 'react';
import ParadeList from './Parade/ParadeList';
import Toggle from './Toggle/Toggle';

function App() {

  const [nemoSize, setNemoSize] = useState(100);
  const [darlaSize, setDarlaSize] = useState(100);
  const [swims, setSwims] = useState(['dory', 'marlin', 'bruce', 'nigel', 'mine']);
  const [reefDentist, setReefDentist] = useState(true);

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

  function handleBackButton() {
    swims.pop();
    setSwims(swims.slice());
  }

  return (
    <div className="App">
      <header>Welcome to my App!</header>
      <div className="darlaFight">
        <div className='fishie'>
          <img src="./images/nemo1.png" width={nemoSize}></img>
          <div className='button'>
            <button onClick={() => setNemoSize(nemoSize + 3)}>Settle Bag</button>
            <button onClick={() => setDarlaSize(darlaSize - 3)}>Get Caught</button>
          </div>
        </div>
        <div className='darla'>
          <img src="./images/darla2.png" width={darlaSize}></img>
          <div className='button'>
            <button onClick={() => setDarlaSize(darlaSize + 3)}>FISHIE!!!!!!</button>
            <button onClick={() => setNemoSize(nemoSize - 3)}>Shake Bag</button>
          </div>
        </div>
        <hr />
      </div>
      <div className='ocean'>
        <Toggle reefDentist={reefDentist} />
        <button onClick={() => setReefDentist(!reefDentist)}>{reefDentist ? 'WHERES NEMO?' : 'THERES NEMO!'}</button>
      </div>
      <hr />
      <ParadeList swims={swims} />
      <div className='buttons'>
        <button onClick={() => handleDoryClick('dory')}>Dory</button>
        <button onClick={() => handleMarlinClick('marlin')}>Marlin</button>
        <button onClick={() => handleBruceClick('bruce')}>Bruce</button>
        <button onClick={() => handleNigelClick('nigel')}>Nigel</button>
        <button onClick={() => handleMineClick('mine')}>MINE!</button>
        <button onClick={handleBackButton}>Stop Looking</button>

      </div>
    </div>
  );
}

export default App;
