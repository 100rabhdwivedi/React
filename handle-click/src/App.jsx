import React, { Fragment, useState } from 'react';

const App = () => {
  const [data, setData] = useState("");
  const [msg, setMsg] = useState("");

  const handleClick = () => {
    setData("Clicked Successfully");
  };

  const handleClickParam = (value) => {
    setMsg(value);
  };

  return (
    <Fragment>
      <h1>{data ? data : "Click the button"}</h1>
      <h1>{msg ? msg : "Click with param"}</h1>
      
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleClickParam("Function with param")}>Click Param</button>
    </Fragment>
  );
};

export default App;
