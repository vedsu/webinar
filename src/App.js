import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar.js';
import Sidebar from './Component/Sidebar.js';
import Speaker from './Component/MainPage/Speaker.js';
import Webinar from './Component/MainPage/Webinar.js';
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Speaker/>
      <Webinar/>
    </div>
  );
}

export default App;
