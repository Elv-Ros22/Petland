import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://petland-backend.onrender.com/api/users/register",
        {
          username,
          password,
        }
      );
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        (error.response.data.message || error.response.data.message)
      ) {
        setMessage(error.response.data.mess || error.response.data.message);
      } else {
        setMessage("Registration failed");
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button>Don't have an account? Register</button>
      </form>
      <p>{message}</p>
      <Link to="/">Back to Login</Link>
    </div>
  );
}
