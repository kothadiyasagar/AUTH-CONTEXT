import logo from './logo.svg';
import './App.css';
import { AuthContext } from './Context/AuthContexProvider';
import Navbar from './navbar';
import { Status } from './Status';

function App() {
  return (
    <div>
      <Navbar/>
      <Status/>
    </div>
  );
}

export default App;
