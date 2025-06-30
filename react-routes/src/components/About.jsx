const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-2xl p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-300 mb-6">
          Hi, I'm <span className="text-blue-400 font-semibold">Saurabh Dwivedi</span>, a passionate
          web developer with a love for clean code, beautiful UI, and real-world projects. I'm currently learning
          <span className="text-green-400"> React, Express, Node.js, MongoDB</span>, and also exploring how to bring AI into my apps.
        </p>

        <p className="text-gray-400 mb-6">
          I'm someone who learns by building. Recently, I created a Windows OS Clone, Weather App,
          and multiple interactive UI components using just HTML, Tailwind CSS, and JavaScript. When I’m not coding,
          I’m thinking of the next viral idea to post on LinkedIn 😄.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
