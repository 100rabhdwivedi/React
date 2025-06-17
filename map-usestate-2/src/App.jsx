import React, { Fragment, useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
const [todo, setTodo] = useState([
  { id: "V1StGXR8_Z5jdHi6B-myT", title: "Complete React project structure", isActive: true },
  { id: "mJpN0KDQefYpTJKoZ3OjC", title: "Prepare notes for JavaScript ES6", isActive: false },
  { id: "x1AoEy8_TbG6U2k4W6KLr", title: "Review pull requests on GitHub", isActive: true },
  { id: "u3bT92p_qY5mxVh4P2F7v", title: "Team sync-up meeting at 5 PM", isActive: false },
  { id: "Z9g6bRLC_WJzQcvRMp17X", title: "Workout for 30 minutes", isActive: true }
]);


  return (
    <Fragment>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📝 My Todo App
          </h1>
          <Create todo={todo} setTodo={setTodo} />
          <Read todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </Fragment>
  );
};

export default App;