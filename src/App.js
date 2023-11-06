import logo from './logo.svg';
import './App.css';
import './Component/Navbar.js'
import Navbar from './Component/Navbar.js';
import Sidebar from './Component/Sidebar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
