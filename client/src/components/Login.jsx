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
        navigate("/");
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("Login failed. Please try again.", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border-2 p-4 rounded-lg h-full mb-4">
        <h2 className="text-2xl font-bold justify-center items-center align-center pb-10">
          LOG IN
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-bold">
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
          <button type="submit" className="border-2 p-2 rounded-lg">
            Login
          </button>
        </form>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
};

export default Login;
