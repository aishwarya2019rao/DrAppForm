import React, { useState } from "react";
import axios from "axios";

export default function DoctorForm() {
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, val]) => data.append(key, val));
    data.append("photo", file);
    await axios.post("http://localhost:5000/api/doctors", data);
    alert("Doctor info submitted");
  };

  return (
    <div className="font-sans min-h-screen bg-gray-100">
      <div className="navbar">EUGI</div>
      <form onSubmit={handleSubmit} className="form-container mt-10">
        <h2 className="heading">Personal details</h2>
        <p className="text-sm text-gray-500 mb-4">All the fields are mandatory</p>

        <input name="doctor_id" placeholder="Doctor ID *" className="input" required />
        <div className="flex gap-2">
          <input disabled value="Dr." className="input w-1/4 text-center bg-gray-100" />
          <input name="doctor_name" placeholder="Full Name *" className="input w-3/4" required />
        </div>
        <input name="specialty" placeholder="Specialty *" className="input" required />
        <input name="contact" placeholder="Contact Number (Personal) *" className="input" required />
        <input name="clinic_number" placeholder="Clinic Appointment Number (optional)" className="input" />
        <input name="email" placeholder="Email ID" className="input" />
        <input name="address" placeholder="Address *" className="input" required />
        <select name="template" className="input" required>
          <option value="">Select Template for visiting card *</option>
          <option value="A">Template A</option>
          <option value="B">Template B</option>
        </select>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="input" required />
        <button type="submit" className="btn">SUBMIT</button>
      </form>

      <div className="footer-nav">
        <i className="fas fa-home footer-icon"></i>
        <i className="fas fa-stethoscope footer-icon"></i>
        <i className="fas fa-user footer-icon"></i>
      </div>
    </div>
  );
}
