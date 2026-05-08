import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    inProgressTasks: 0,
    todoTasks: 0,
    overdueTasks: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(response.data);
    } catch (error) {
      console.log(error);

      alert("Failed to load dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              Total Tasks
            </h3>

            <p className="text-4xl font-bold mt-4 text-blue-600">
              {stats.totalTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              Completed
            </h3>

            <p className="text-4xl font-bold mt-4 text-green-600">
              {stats.completedTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              In Progress
            </h3>

            <p className="text-4xl font-bold mt-4 text-yellow-500">
              {stats.inProgressTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              TODO
            </h3>

            <p className="text-4xl font-bold mt-4 text-red-500">
              {stats.todoTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              Overdue
            </h3>

            <p className="text-4xl font-bold mt-4 text-purple-600">
              {stats.overdueTasks}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;