import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cartable from "./components/Cartable";
import Nav from "./components/Nav";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import { useState } from "react";
import Carcard from "./components/Carcard";

function App() {
  const [carToEdit, setCarToEdit] = useState({});
  const [carToView, setCarToView] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            index
            element={
              <Cartable
                setCarToView={setCarToView}
                setCarToEdit={setCarToEdit}
              />
            }
          />
          <Route path="/add" element={<AddCar />} />
          <Route path="/update" element={<EditCar carToEdit={carToEdit} />} />
          <Route path="/card" element={<Carcard car={carToView} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
