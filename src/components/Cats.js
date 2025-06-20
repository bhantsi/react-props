import React from 'react';

export default function Cats({ img, name, phone, email }) {
 return (
    <div className="cats-cards">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <div className="info-group">
            <img src="./imgs/phone-icon.png" alt="Phone Icon" />
            <p>{phone}</p>
        </div>
        <div className="info-group">
            <img src="./imgs/mail-icon.png" alt="Mail Icon" />
            <p>{email}</p>
        </div>
    </div>
    )
}