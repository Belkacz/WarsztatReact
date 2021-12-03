import React, { useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

function App() {
  const [tasksadd, setTasks] = useState([]);

  function reciver(obj) {
    setTasks((prev) => [...prev, obj]);
  }

  function refreshList(obj) {
    setTasks(obj);
  }

  return (
    <div>
      <AddTask funtionFromParent={reciver} />
      <Tasks props={tasksadd} />
    </div>
  );
}

export default App;
