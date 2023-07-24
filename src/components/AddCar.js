import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();
  const [car, setcar] = useState({
    company: "",
    modal: "",
    price: "",
  });
  const formHandel = (event) => {
    event.preventDefault();
    axios
      .post("https://6481b16929fa1c5c5031e304.mockapi.io/cars", car)
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="container border border-dark rounded mt-2 ">
        <h1 className="text-danger text-center">Cars</h1>
        <form
          action=""
          onSubmit={(e) => {
            formHandel(e);
          }}
        >
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setcar({ ...car, company: e.target.value });
              }}
            />
            <label for="email">Company</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setcar({ ...car, modal: e.target.value });
              }}
            />
            <label for="email">Modal</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setcar({ ...car, price: e.target.value });
              }}
            />
            <label for="email">Price</label>
          </div>
          <div className="mb-3 mt-3 text-center">
            <input type="submit" className="btn btn-outline-primary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCar;
