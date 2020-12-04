import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
