import { useNavigate, Outlet } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate("/service/details");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 flex flex-col lg:flex-row gap-6 items-start justify-center">
      
      {/* Left: Service Card */}
      <div className="w-full lg:w-1/2 bg-gray-800 rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">My Service</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Web App Development</h2>
          <p className="text-gray-300">
            I build modern, fast, and responsive full-stack web applications using technologies like React, Node.js, Express, and MongoDB.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleShowDetails}
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Show Details
          </button>
        </div>
      </div>

      {/* Right: Nested Route Content (Outlet) */}
      <div className="w-full lg:w-1/2 bg-gray-800 rounded-2xl shadow-xl  ">
        <Outlet />
      </div>
    </div>
  );
};

export default Service;
