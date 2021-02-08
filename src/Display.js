import React from "react";
import './Display.css';
import Account from "./Account";

function Display(props) {
  return (
    <div className="Display">
        <h1>Account Linking</h1>
        <p>Click on the button to link accounts.</p>
        <div>
        {props.accountData.map((account) => (
            <Account updateHandle={props.updateHandle} data={account} />
        ))}
        </div>
    </div>
  );
}

export default Display;