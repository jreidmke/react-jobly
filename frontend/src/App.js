import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import { decode } from "jsonwebtoken";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const token = localStorage.getItem('_token');
        let {username} = decode(token);
        console.log(username);
        let user = await JoblyApi.getCurrentUser(username);
        setUser(user);
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    }
    getCurrentUser();
  }, [token]);

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
