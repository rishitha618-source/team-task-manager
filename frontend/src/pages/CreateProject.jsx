import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
      const token = localStorage.getItem("token");

      await axios.post(
        `${import.meta.env.VITE_API_URL}/projects`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Created Successfully");

      navigate("/projects");
    } catch (error) {
      console.log(error);

      alert("Failed to create project");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        fontFamily: "Arial",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "32px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
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
          

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Create projects with clarity.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              opacity: "0.9",
            }}
          >
            Organize workflows, manage deadlines, assign
            responsibilities, and keep your team aligned from
            one centralized workspace.
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
            New Project
          </h1>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "40px",
              fontSize: "18px",
            }}
          >
            Create and manage projects efficiently with task
            tracking and collaboration tools.
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
                Project Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter project title"
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
                Project Description
              </label>

              <textarea
                name="description"
                placeholder="Describe the project goals and objectives"
                rows="6"
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                  resize: "none",
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
              }}
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;