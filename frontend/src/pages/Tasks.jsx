import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data);
    } catch (error) {
      console.log(error);

      alert("Failed to load tasks");
    }
  };

  const getStatusColor = (status) => {
    if (status === "DONE") {
      return "text-green-600";
    }

    if (status === "IN_PROGRESS") {
      return "text-yellow-500";
    }

    return "text-red-500";
  };

  const formatStatus = (status) => {
    if (status === "IN_PROGRESS") {
      return "In Progress";
    }

    if (status === "TODO") {
      return "To Do";
    }

    return "Done";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-blue-600 tracking-widest text-sm mb-2">
              TASK MANAGEMENT
            </p>

            <h1 className="text-5xl font-bold text-gray-800">
              Tasks Overview
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Manage assignments, monitor progress, and keep
              track of deadlines.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="p-5 text-left text-lg">
                  Title
                </th>

                <th className="p-5 text-left text-lg">
                  Status
                </th>

                <th className="p-5 text-left text-lg">
                  Assigned To
                </th>

                <th className="p-5 text-left text-lg">
                  Project
                </th>

                <th className="p-5 text-left text-lg">
                  Due Date
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-5 font-semibold text-gray-800">
                    {task.title}
                  </td>

                  <td
                    className={`p-5 font-bold ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {formatStatus(task.status)}
                  </td>

                  <td className="p-5 text-gray-700">
                    {task.assignedTo?.name}
                  </td>

                  <td className="p-5 text-gray-700">
                    {task.project?.title}
                  </td>

                  <td className="p-5 text-gray-700">
                    {new Date(
                      task.dueDate
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tasks;