import './App.css';
import { useState } from 'react';

function App() {

  const [nemoSize, setNemoSize] = useState(100);
  const [darlaSize, setDarlaSize] = useState(100);








  return (
    <div className="App">
      <heaader>Welcome to my App!</heaader>
      <div className="ocean">
        <div className='fishie'>
          <img src="./images/nemo1.png" width={nemoSize}></img>
          <div className='button'>
            <button onClick={() => setNemoSize(nemoSize + 1)}>Settle Bag</button>
            <button onClick={() => setDarlaSize(nemoSize - 1)}>Shake Bag</button>
          </div>
        </div>
        <div className='fishie'>
          <img src="./images/darla2.png" width={darlaSize}></img>
          <div className='button'>
            <button onClick={() => setDarlaSize(darlaSize + 1)}>Shake Bag</button>
            <button onClick={() => setNemoSize(darlaSize - 1)}>Get Caught</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
