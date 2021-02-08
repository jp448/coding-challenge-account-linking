import React from "react";
import './Info.css';
import Button from "./Button";

function Info(props) {
   const handleOnClick = () => {
       const requestOptions = {
           method: "POST",
           headers: { 'Content-Type' : 'application/json'},
           body: JSON.stringify({username: props.infoData.username })
       };
       console.log(requestOptions);
       fetch(`https://berlin-probearbeiter.azurewebsites.net/api/getUid/${props.UID}?code=EoejvGAk4l407QKb4iEanusoUK7B8INHQl0FOcE7aExNL63SEkuDxg==`, requestOptions)
        .then((res) => res.json())
        .then(data => props.updateHandle(data));
   }

  return (
    <div className="Info">
        <div className="text">
            <p>Username: {props.infoData.username}</p>
            <p>Company: {props.infoData.companyName}</p>
        </div>
        <div>
            {props.islinked ? <Button onClick={null} content="Linked" /> : <Button onClick={handleOnClick} content="Link Account" />}
        </div>
    </div>
  );
}

export default Info;