import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Team Task Manager
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>

        <button
          onClick={logout}
          className="bg-white text-blue-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;