import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, getTasks } from "./api/constants";
import Operation from "./Operation";

export default function Operations({ taskId, operationsForm }) {
  const [newOperation, setNewOperation] = useState({
    description: "",
    timeSpent: 0,
  });
  const [operations, setOperations] = useState([]);
  const [refresh, setReFresh] = useState(true);

  const updateNewOperationState = (e) => {
    const { name, value } = e.target;
    setNewOperation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const pushOperation = async (e) => {
    try {
      e.preventDefault();
      let data = {
        description: newOperation.description,
        timeSpent: newOperation.timeSpent,
      };
      const resp = await fetch(`${API_URL}/tasks/${taskId}/operations`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
      });
      setReFresh(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const getOperations = async () => {
        const resp = await fetch(`${API_URL}/tasks/${taskId}/operations`, {
          headers: { Authorization: API_KEY },
        });
        const { data } = await resp.json();
        setOperations(data);
      };
      getOperations();
      console.log("useeffect2");
      setReFresh(false);
    } catch (error) {
      console.log(error);
    }
  }, [refresh]);

  return (
    <div>
      <div hidden={operationsForm} className="card-body">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Operation description"
              value={newOperation.description}
              onChange={updateNewOperationState}
            />

            <div className="input-group-append">
              <button
                onClick={(e) => {
                  pushOperation(e);
                }}
                className="btn btn-info"
              >
                Add
                <i className="fas fa-plus-circle ml-1"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <ul className="list-group list-group-flush">
        {console.log(operations)}
        {operations !== []
          ? operations.map(({ id, description, timeSpent }) => {
              return (
                <li key={id}>
                  <Operation
                    description={description}
                    id={id}
                    timeSpent={timeSpent}
                    setReFresh={setReFresh}
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
