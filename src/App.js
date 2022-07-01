import './App.css';
import FindingNemo from './FindingNemo';
import Admin from './Admin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


export function App() {
  return (
    <Router className="App">
      <Link to="/admin">Admin
      </Link>
      <Routes>
        <Route path='/' element={<FindingNemo/>}>NEMO</Route>
        <Route path='/admin' element={<Admin/>}>ADMIN</Route>
      </Routes>
    </Router>
  );
}
export default App;