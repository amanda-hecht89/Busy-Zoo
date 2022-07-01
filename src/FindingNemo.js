import './App.css';
import { useState } from 'react';
import ParadeList from './Parade/ParadeList';
import Toggle from './Toggle/Toggle';
import CustomButton from './CustomButton';

function FindingNemo() {

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
            <CustomButton onClick={() => setNemoSize(nemoSize + 3)}>Settle Bag</CustomButton>
            <CustomButton onClick={() => setDarlaSize(darlaSize - 3)}>Get Caught</CustomButton>
          </div>
        </div>
        <div className='darla'>
          <img src="./images/darla2.png" width={darlaSize}></img>
          <div className='button'>
            <CustomButton onClick={() => setDarlaSize(darlaSize + 3)}>FISHIE!!!!!!</CustomButton>
            <CustomButton onClick={() => setNemoSize(nemoSize - 3)}>Shake Bag</CustomButton>
          </div>
        </div>
        <hr />
      </div>
      <div className='ocean'>
        <Toggle reefDentist={reefDentist} />
        <CustomButton onClick={() => setReefDentist(!reefDentist)}>{reefDentist ? 'WHERES NEMO?' : 'THERES NEMO!'}</CustomButton>
      </div>
      <hr />
      <ParadeList swims={swims} />
      <div className='buttons'>
        <CustomButton alt='Dory' onClick={() => handleDoryClick('dory')}>Dory</CustomButton>
        <CustomButton onClick={() => handleMarlinClick('marlin')}>Marlin</CustomButton>
        <CustomButton onClick={() => handleBruceClick('bruce')}>Bruce</CustomButton>
        <CustomButton onClick={() => handleNigelClick('nigel')}>Nigel</CustomButton>
        <CustomButton onClick={() => handleMineClick('mine')}>MINE!</CustomButton>
        <CustomButton onClick={handleBackButton}>Stop Looking</CustomButton>

      </div>
    </div>
  );
}

export default FindingNemo;
