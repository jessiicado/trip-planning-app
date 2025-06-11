import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/"); // Redirect to signup page after logout
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && typeof token === "string") {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  // New handler to update user when signup/login succeeds
  const handleAuthSuccess = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      {/* Pass handleAuthSuccess to nested routes/components */}
      <Outlet context={{ user, handleAuthSuccess, handleLogout }} />
    </>
  );
}

export default App;
