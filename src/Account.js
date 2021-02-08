import React from "react";
import './Info.css';
import Info from "./Info";

function Account(props) {
    let unlinkedaccs = [];
    let linkedaccs = [];
    props.data.emails.map((email) => {
        props.data.accounts[email].unlinkedAccounts.map((info) => {
            unlinkedaccs.push(<Info updateHandle={props.updateHandle} UID={props.data.uid} infoData={info} islinked={false}/>);
        })
        props.data.accounts[email].linkedAccounts.map((info) => {
            linkedaccs.push(<Info updateHandle={props.updateHandle} UID={props.data.uid} infoData={info} islinked={true} />);
        })
    })

  return (
    <div className="Account">
        <p>{props.data.email}</p>
        {linkedaccs}
        {unlinkedaccs}
    </div>
  );
}

export default Account;