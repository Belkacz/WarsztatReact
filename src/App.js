import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { API_KEY, API_URL, getTasks } from "./api/constants";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasksLite = async () => {
      const resp = await fetch(`${API_URL}/tasks`, {
        headers: { Authorization: API_KEY },
      });
      const { data } = await resp.json();
      setTasks(data);
    };
    getTasksLite();
  }, [tasks]);

  function reciver(obj) {
    setTasks((prev) => [...prev, obj]);
  }

  return (
    <div>
      <AddTask funtionFromParent={reciver} />
      <Tasks props={tasks} />
    </div>
  );
}

export default App;
