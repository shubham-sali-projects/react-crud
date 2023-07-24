import React, { useEffect, useState } from "react";

const Carcard = ({ car }) => {
  return (
    <>
      <div className="m-auto">
        <div className="card  " style={{ width: "300px" }}>
          <img className="card-img-top" src={car.img} alt="" />
          <div className="card-body">
            <h4 className="card-text">ID:{car.id}</h4>
            <h4 className="card-text">Company:{car.company}</h4>
            <h4 className="card-text">Modal:{car.modal}</h4>
            <h4 className="card-text">Price:{car.price}</h4>
            <a href="#" className="btn btn-outline-primary">
              See Car Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carcard;
