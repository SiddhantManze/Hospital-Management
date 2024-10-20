import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Many patients struggle with the problem of long waiting queue to get appointment, storing data of patients offline by the hospital, fail to take appointment from home according to convenience. 
          This problem can be solve using AAYUSH.

          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            Book your appointment online and get variety of doctors according to your medical problem
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
