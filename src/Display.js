import React from "react";
import './Display.css';
import Account from "./Account";

function Display(props) {
  return (
    <div className="Display">
        <div className="header">
            <h1>Account Linking</h1>
            <p>Click on the button to link accounts.</p>
        </div>
        <div>
            {props.accountData.map((account) => (
                <div>
                    <Account updateHandle={props.updateHandle} data={account} />
                    <hr></hr>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Display;