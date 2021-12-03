import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { API_KEY, API_URL, getTasks } from "./api/constants";

function App() {
  const [tasks, setTasks] = useState([]);
  const [fresh, setFresh] = useState(true);

  useEffect(() => {
    const getTasksLite = async () => {
      const resp = await fetch(`${API_URL}/tasks`, {
        headers: { Authorization: API_KEY },
      });
      const { data } = await resp.json();
      setTasks(data);
    };
    console.log(tasks);

    getTasksLite();
    setFresh(false);
  }, [fresh]);

  const remover = async (id) => {
    if (typeof setTasks === "function") {
      const resp = await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
      });
      setFresh(true);
    }
  };

  function reciver(obj) {
    setFresh(true);
    setTasks((prev) => [...prev, obj]);
  }

  // const remove = async (id) => {
  //   try {
  //     const resp = await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
  //     setTasks((prev) => prev.filter((task) => task.id !== id));
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  return (
    <div id="app" className="container mb-5">
      <AddTask funtionFromParent={reciver} />
      <Tasks props={tasks} remover={remover} />
    </div>
  );
}

export default App;
