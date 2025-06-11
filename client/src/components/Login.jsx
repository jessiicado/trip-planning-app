import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const { handleAuthSuccess } = useOutletContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        const decoded = jwtDecode(data.token);
        console.log("User ID:", decoded.id);
        handleAuthSuccess(data.token);
        navigate(`/users/${decoded.id}/trips`);
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>LOG IN</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Login;
