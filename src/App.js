import './App.css';
import { useState } from 'react';

function App() {

  const [nemoSize, setNemoSize] = useState(20);
  const [darlaSize, setDarlaSize] = useState(20);








  return (
    <div className="App">
      <heaader>Welcome to my App!</heaader>
      <div className="ocean">
        <div className='fishie'>
          <img src="darla2.png" width={darlaSize}></img>
          <div className='button'>
            <button onClick={() => setNemoSize(nemoSize + 10)}>Settle Bag</button>
            <button onClick={() => setDarlaSize(nemoSize - 10)}>Shake Bag</button>
          </div>
        </div>
        <div className='fishie'>
          <img src="nemo1.png" width={nemoSize}></img>
          <div className='button'>
            <button onClick={() => setDarlaSize(darlaSize + 10)}>Shake Bag</button>
            <button onClick={() => setNemoSize(darlaSize - 10)}>Get Caught</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
