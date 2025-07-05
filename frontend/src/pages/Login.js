import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      if (res.data.success) navigate("/home");
      else alert(res.data.message);
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="page-center font-sans">
      <h2 className="mb-4 text-xl">Login to continue</h2>
      <form onSubmit={handleSubmit} className="form-container w-96">
        <input type="text" name="username" placeholder="Username" className="input" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input type="password" name="password" placeholder="Password" className="input" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <div className="my-2">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit" className="btn">LOGIN</button>
      </form>
    </div>
  );
}
