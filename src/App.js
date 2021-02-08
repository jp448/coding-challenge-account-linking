import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./Navbar";
import Display from "./Display";
function App() {
  const [accounts, setAccounts] = useState([]);
  const [lastUpdate, setLastUpdate] = useState([]);

  useEffect(() => {
    let UIDs = [];
    setAccounts([]);
      fetch("https://berlin-probearbeiter.azurewebsites.net/api/getUid?code=EoejvGAk4l407QKb4iEanusoUK7B8INHQl0FOcE7aExNL63SEkuDxg==")
        .then((res) => res.json())
        .then((result) => {
          UIDs = result.validUids[0];
          UIDs.forEach(UID => {
            fetch(`https://berlin-probearbeiter.azurewebsites.net/api/getUid/${UID}?code=EoejvGAk4l407QKb4iEanusoUK7B8INHQl0FOcE7aExNL63SEkuDxg==`)
              .then((res) => res.json())
              .then((result) => {
                setAccounts(oldAccounts => [...oldAccounts, result]);
              });
          });
        });      
  }, [lastUpdate]);

  return (
    <div className="App">
      <Navbar />
      <Display updateHandle={setLastUpdate} accountData={accounts}/>
    </div>
  );
}

export default App;
