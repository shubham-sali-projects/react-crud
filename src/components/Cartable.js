import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cartable = ({ setCarToEdit, setCarToView }) => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("https://6481b16929fa1c5c5031e304.mockapi.io/cars")
      .then((res) => {
        setCars(res.data);
      });
  }, []);

  const deleteCar = (id) => {
    axios
      .delete("https://6481b16929fa1c5c5031e304.mockapi.io/cars/" + id)
      .then((res) => {
        let _cars = cars.filter((car) => car.id != id);
        setCars(_cars);
      });
  };

  return (
    <>
      <div className="container my-5">
        <table className="table" data-bs-theme="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Company</th>
              <th>Modal</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, carindex) => {
              return (
                <tr key={carindex}>
                  <td>{car.id}</td>
                  <td>{car.company}</td>
                  <td>{car.modal}</td>
                  <td>{car.price}</td>
                  <td>
                    <button
                      className="me-2 btn btn-danger"
                      onClick={() => {
                        deleteCar(car.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="me-2 btn btn-primary"
                      onClick={() => {
                        setCarToEdit(car);
                        navigate("/update");
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="me-2 btn btn-warning"
                      onClick={() => {
                        setCarToView({
                          ...car,
                          img: `https://loremflickr.com/320/24${car.id}/car`,
                        });
                        navigate("/card");
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cartable;
