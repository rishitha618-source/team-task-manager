import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "MEMBER",
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
      await api.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Registration Failed");
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
            Build and manage projects smarter.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              opacity: "0.9",
            }}
          >
            Collaborate with your team, organize workflows,
            monitor tasks, and stay productive with a modern
            project management experience.
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
            Create Account
          </h1>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "40px",
              fontSize: "18px",
            }}
          >
            Register to start managing projects and tasks.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "#374151",
                }}
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
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

            <div style={{ marginBottom: "22px" }}>
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

            <div style={{ marginBottom: "22px" }}>
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

            <div style={{ marginBottom: "35px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "#374151",
                }}
              >
                Role
              </label>

              <select
                name="role"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                }}
              >
                <option value="MEMBER">
                  Member
                </option>

                <option value="ADMIN">
                  Admin
                </option>
              </select>
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
              Create Account
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;