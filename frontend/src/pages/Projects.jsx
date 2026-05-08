import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Projects() {
  const [projects, setProjects] = useState([]);

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
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="text-sm text-gray-500">
                Created By:{" "}
                {project.createdBy?.name}
              </div>

              <div className="text-sm text-gray-500 mt-2">
                Created At:{" "}
                {new Date(
                  project.createdAt
                ).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;