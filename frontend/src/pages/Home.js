import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="navbar">EUGI</div>

      <div className="flex justify-center mt-16">
        <div className="card w-11/12 md:w-2/3">
          <p className="mb-2">
            Dear Colleague,<br />
            Create a Personalized Visiting Card for your esteemed doctors.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Note: Ensure all details you enter (Name, Credentials, High-Resolution Photograph, code etc)
            are correct, as the photo frame will be customized based on these details.
          </p>
          <button onClick={() => navigate("/add-doctor")} className="btn">ADD NEW DOCTOR</button>
        </div>
      </div>

      <div className="footer-nav">
        <i className="fas fa-home footer-icon"></i>
        <i className="fas fa-stethoscope footer-icon"></i>
        <i className="fas fa-user footer-icon"></i>
      </div>
    </div>
  );
}
