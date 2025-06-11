import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useOutletContext } from "react-router-dom";

const Signup = () => {
  const { handleAuthSuccess } = useOutletContext();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5050/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || `Signup failed: ${res.statusText}`);
        return;
      }
      if (!data.token) {
        setError("Signup failed: no token received.");
        return;
      }
      handleAuthSuccess(data.token);
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="justify-center items-center align-center flex text-2xl">
        SIGN UP
      </h2>
      <div className="flex flex-row justify-center align-center items-center border-2 border-gray-300 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="border-2 border-gray-300 rounded-lg p-1"
            name="firstName"
            type="text"
            placeholder="Joe"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            className="border-2 border-gray-300 rounded-lg p-1"
            type="text"
            placeholder="Mama"
            value={form.lastName}
            onChange={handleChange}
          />
          <input
            name="username"
            className="border-2 border-gray-300 rounded-lg p-1"
            type="text"
            placeholder="joemama1"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            className="border-2 border-gray-300 rounded-lg p-1"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            className="border-2 border-gray-300 rounded-lg p-1"
            onChange={handleChange}
            value={form.password}
            placeholder="Password"
          />
          <button type="submit" className="font-bold">
            Create Account
          </button>
        </form>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
};

export default Signup;
