import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages";
import Jetskis from "./pages/jetskis";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">

      <header className="App-header">
          <div className={"title-bg"}>
          <p className={"title"}>
              Welcome to <b>JetSkiRent</b>
          </p>
          </div>
      </header>
        <div className={"App-bg"}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element ={<Home/>}/>
                    <Route path='/Jetskis' element={<Jetskis/>} />
                    <Route path='/Contact' element={<Contact/>} />
                </Routes>
            </Router>
        </div>
    </div>
  );
}

export default App;
