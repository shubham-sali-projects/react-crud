import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditCar = ({ carToEdit }) => {
  const navigate = useNavigate();
  const [car, setcar] = useState({
    id: "",
    company: "",
    modal: "",
    price: "",
  });

  useEffect(() => {
    setcar(carToEdit);
  }, [carToEdit]);

  const formHandel = (event) => {
    event.preventDefault();
    axios
      .put("https://6481b16929fa1c5c5031e304.mockapi.io/cars/" + car.id, car)
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
              value={car.company}
            />
            <label for="">Company</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setcar({ ...car, modal: e.target.value });
              }}
              value={car.modal}
            />
            <label for="">Modal</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setcar({ ...car, price: e.target.value });
              }}
              value={car.price}
            />
            <label for="">Price</label>
          </div>
          <div className="mb-3 mt-3 text-center">
            <input type="submit" className="btn btn-outline-primary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCar;
