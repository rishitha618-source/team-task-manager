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

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Tasks
        </h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Assigned To
                </th>

                <th className="p-4 text-left">
                  Project
                </th>

                <th className="p-4 text-left">
                  Due Date
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {task.title}
                  </td>

                  <td
                    className={`p-4 font-semibold ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </td>

                  <td className="p-4">
                    {task.assignedTo?.name}
                  </td>

                  <td className="p-4">
                    {task.project?.title}
                  </td>

                  <td className="p-4">
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