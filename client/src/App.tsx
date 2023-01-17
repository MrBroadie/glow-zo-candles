import React from "react";
import "./App.css";

function App() {
  const thisFunction = () => {
    console.log(1 + 2);
  };

  return (
    <div>
      <button onClick={thisFunction}></button>
    </div>
  );
}

export default App;
