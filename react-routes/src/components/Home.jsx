const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Saurabh Dwivedi 👋</h1>
        <p className="text-lg text-gray-300 mb-6">
          A passionate Web Developer who loves crafting beautiful and functional web experiences. Currently learning React, Express, MongoDB, and Node.js. I enjoy turning ideas into reality using clean and modern code.
        </p>
        <p className="text-gray-400 mb-8">
          🚀 On a journey to master full-stack development and build projects that create impact. I'm also exploring AI and building creative UIs like a Windows OS clone and weather dashboard.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          View My Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
