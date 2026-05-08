import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    inProgressTasks: 0,
    todoTasks: 0,
    overdueTasks: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(response.data);
    } catch (error) {
      console.log(error);

      alert("Failed to load dashboard");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
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
      {/* Navbar */}
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
              fontSize: "32px",
              color: "#111827",
              marginBottom: "5px",
            }}
          >
            Team Task Manager
          </h1>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Organize projects and track team productivity
          </p>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <button
            onClick={() => navigate("/projects")}
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
            Projects
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

          <button
            onClick={handleLogout}
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              border: "1px solid #d1d5db",
              background: "white",
              color: "#111827",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(to right, #2563eb, #7c3aed)",
          borderRadius: "32px",
          padding: "60px",
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
          DASHBOARD
        </p>

        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          Workspace Overview
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "800px",
            opacity: "0.9",
          }}
        >
          Monitor projects, track team productivity, manage
          tasks, and stay ahead of deadlines from one central
          dashboard.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Total */}
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            Total Tasks
          </p>

          <h1
            style={{
              fontSize: "56px",
              color: "#2563eb",
            }}
          >
            {stats.totalTasks}
          </h1>
        </div>

        {/* Completed */}
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            Completed
          </p>

          <h1
            style={{
              fontSize: "56px",
              color: "#16a34a",
            }}
          >
            {stats.completedTasks}
          </h1>
        </div>

        {/* In Progress */}
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            In Progress
          </p>

          <h1
            style={{
              fontSize: "56px",
              color: "#f59e0b",
            }}
          >
            {stats.inProgressTasks}
          </h1>
        </div>

        {/* To Do */}
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            To Do
          </p>

          <h1
            style={{
              fontSize: "56px",
              color: "#ef4444",
            }}
          >
            {stats.todoTasks}
          </h1>
        </div>

        {/* Overdue */}
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            Overdue Tasks
          </p>

          <h1
            style={{
              fontSize: "56px",
              color: "#db2777",
            }}
          >
            {stats.overdueTasks}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;