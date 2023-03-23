import React from 'react';
import contact from '../../Data/Contact.json';
import './style.css';

const Card = () => {
  return (
    <div className="card-container">
      {contact.map((item) => {
        return (
          <div className="data">
            <div className="gambar">
              <img src={item.image} alt="" />
            </div>
            <div className="informasi">
              <h5>{item.name}</h5>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
