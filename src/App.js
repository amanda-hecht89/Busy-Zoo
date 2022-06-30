import './App.css';
import FindingNemo from './FindingNemo';
import Admin from './Admin';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


export function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<FindingNemo/>}>NEMO</Route>
        <Route path='/admin' element={<Admin/>}>ADMIN</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

