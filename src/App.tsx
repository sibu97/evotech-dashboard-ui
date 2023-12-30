import './App.css';
import Menubar from './components/sidebar/Sidemenubar';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
        <div className="page">
              <div className="content">
                 <Navbar/>
              </div>

               <Menubar/>
        </div>

    </div>
  );
}

export default App;
