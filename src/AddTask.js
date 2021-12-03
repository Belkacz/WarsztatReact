import React, { useState } from "react";

function AddTask({ funtionFromParent }) {
  const [newTaskState, setnewTaskState] = useState([]);

  const pushByFetchOnClick = (data) => {
    if (typeof funtionFromParent === "function") {
      funtionFromParent(data);
    }
  };

  const updateTaskState = (e) => {
    const { name, value } = e.target;
    setnewTaskState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const pushTask = async (e) => {
    try {
      e.preventDefault();
      let data = {
        title: newTaskState.Title,
        description: newTaskState.Description,
      };
      pushByFetchOnClick(data);
      const resp = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h1 className="card-title">New task</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="Title"
              placeholder="Title"
              value={newTaskState.title}
              onChange={updateTaskState}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Description"
              value={newTaskState.description}
              onChange={updateTaskState}
            />
          </div>
          <button
            onClick={(e) => {
              pushTask(e);
            }}
            className="btn btn-info"
          >
            Add task
            <i className="fas fa-plus-circle ml-1"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
