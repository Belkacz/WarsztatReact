import React, { useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

function App() {
  const [tasks, setTasks] = useState({});

  function reciver(obj) {
    console.log(obj);
    setTasks((prev) => [...prev, obj]);
  }

  return (
    <div>
      <AddTask funtionToChild={reciver} />
      <Tasks />
    </div>
  );
}

export default App;
