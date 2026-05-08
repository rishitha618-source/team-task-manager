import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert("Login Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #eff6ff, #eef2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
  window.innerWidth < 768 ? "1fr" : "1fr 1fr",
          background: "white",
          borderRadius: "32px",
          overflow: "hidden",
          maxWidth: "1200px",
          width: "100%",
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            background:
              "linear-gradient(to bottom right, #2563eb, #7c3aed)",
            color: "white",
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              letterSpacing: "4px",
              marginBottom: "20px",
              opacity: "0.8",
            }}
          >
            TEAM TASK MANAGER
          </p>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Organize work beautifully.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              opacity: "0.9",
            }}
          >
            Manage projects, track tasks, monitor deadlines,
            and collaborate efficiently with a modern task
            management platform.
          </p>
        </div>

        {/* Right Side */}
        <div
          style={{
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "15px",
              color: "#111827",
            }}
          >
            Welcome Back
          </h1>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "40px",
              fontSize: "18px",
            }}
          >
            Sign in to continue managing your projects and
            tasks.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "#374151",
                }}
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                }}
              />
            </div>

            <div style={{ marginBottom: "35px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "#374151",
                }}
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(to right, #2563eb, #7c3aed)",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "25px",
              }}
            >
              Sign In
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
            }}
          >
            Don’t have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;