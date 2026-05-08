import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects(response.data);
    } catch (error) {
      console.log(error);

      alert("Failed to load projects");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "24px 40px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "36px",
              color: "#111827",
              marginBottom: "5px",
            }}
          >
            Projects
          </h1>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Manage and organize all active projects
          </p>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/tasks")}
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              border: "none",
              background: "#7c3aed",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Tasks
          </button>

          <button
            onClick={() => navigate("/projects/new")}
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              border: "none",
              background:
                "linear-gradient(to right, #4f46e5, #7c3aed)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            + New Project
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(to right, #2563eb, #7c3aed)",
          borderRadius: "32px",
          padding: "50px",
          marginBottom: "40px",
          color: "white",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            marginBottom: "15px",
            opacity: "0.8",
          }}
        >
          PROJECT MANAGEMENT
        </p>

        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Active Projects
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px",
            opacity: "0.9",
          }}
        >
          View all ongoing projects, track ownership, and
          manage project workflows efficiently.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "28px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                color: "#111827",
                marginBottom: "20px",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "18px",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                background: "#f3f4f6",
                padding: "18px",
                borderRadius: "18px",
              }}
            >
              <p
                style={{
                  color: "#374151",
                  marginBottom: "10px",
                }}
              >
                <strong>Created By:</strong>{" "}
                {project.createdBy?.name || "Admin"}
              </p>

              <p
                style={{
                  color: "#374151",
                }}
              >
                <strong>Created At:</strong>{" "}
                {new Date(
                  project.createdAt
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;