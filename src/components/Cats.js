import React from 'react';

export default function Cats(props) {
    // console.log(props);
 return (
    // <h3>Here is the cats components...</h3>
    <div className="cats-cards">
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src="./imgs/phone-icon.png" alt="" />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src="./imgs/mail-icon.png" alt="" />
            <p>{props.email}</p>
        </div>
    </div>
    )
}