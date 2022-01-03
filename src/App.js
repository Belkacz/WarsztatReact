import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { API_KEY, API_URL, getTasks } from "./api/constants";

function App() {
  const [tasks, setTasks] = useState([]);
  const [refresh, setReFresh] = useState(true);
  const getTasksLite = async () => {
    const resp = await fetch(`${API_URL}/tasks`, {
      headers: { Authorization: API_KEY },
    });
    const { data } = await resp.json();
    setTasks(data);
  };

  useEffect(() => {
    
    console.log("useeefect");
    getTasksLite();
    // setReFresh(false);
  }, []); //refresh

  const remover = async (id) => {
    const resp = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    });
    setReFresh(true);
  };

  function reciver(obj) {
    setTasks((prev) => [...prev, obj]);
    // setReFresh(true);
    // getTasksLite()
  }

  const finisher = async (id, title, description, status) => {
    let data = {
      id: id,
      title: "close",
      description: description,
      status: "close",
    };

    const resp = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    });
    setReFresh(true);
  };

  return (
    <div id="app" className="container mb-5 ">
      <div className="card-body">
        <AddTask funtionFromParent={reciver} />
        <Tasks props={tasks} remover={remover} finisher={finisher} />
      </div>
    </div>
  );
}

export default App;
