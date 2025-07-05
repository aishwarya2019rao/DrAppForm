import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DoctorForm from "./pages/DoctorForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-doctor" element={<DoctorForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
