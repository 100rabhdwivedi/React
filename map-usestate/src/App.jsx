import { useState } from "react";

const App = () => {
  let data = [
    {
      name: "saurabh",
      age: 18,
    },
    {
      name: "sivam",
      age: 15,
    },
    {
      name: "surya",
      age: 15,
    },
  ];

  const [userLocation, setUserLocation] = useState("Mumbai");

  let updatedData = data.map((elem, index) => {
    return (
      <li key={index}>
        <span>Name: {elem.name}</span> |<small>Age: {elem.age}</small>
      </li>
    );
  });

  let handleClick = () =>{
    setUserLocation("Banglore")
  }
  return (
    <div>
      <h1>Rendering Json data</h1>
      <ul>{updatedData}</ul>
      <ul>{userLocation}</ul>
      <button onClick={handleClick}>change Loc</button>
    </div>
  );
};

export default App;
