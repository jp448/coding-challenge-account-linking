import React from "react";
import './Account.css';
import Info from "./Info";

function Account(props) {
    let unlinkedaccs = [];
    let linkedaccs = [];
    props.data.emails.forEach((email) => {
        props.data.accounts[email].unlinkedAccounts.forEach((info) => {
            unlinkedaccs.push(<Info updateHandle={props.updateHandle} UID={props.data.uid} infoData={info} islinked={false}/>);
        })
        props.data.accounts[email].linkedAccounts.forEach((info) => {
            linkedaccs.push(<Info updateHandle={props.updateHandle} UID={props.data.uid} infoData={info} islinked={true} />);
        })
    })

  return (
    <div className="Account">
        <p className="bold">{props.data.email} <span>({linkedaccs.length} of {linkedaccs.length + unlinkedaccs.length} Linked)</span></p>
        {linkedaccs}
        {unlinkedaccs}
    </div>
  );
}

export default Account;