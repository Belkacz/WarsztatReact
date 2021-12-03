import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, getTasks } from "./api/constants";

function Tasks({props}) {
  // const [tasks, setTasks] = useState([]);
  // console.log(props);



  // useEffect(() => {
  //   const getTasksLite = async () => {
  //     const resp = await fetch(`${API_URL}/tasks`, {
  //       headers: { Authorization: API_KEY },
  //     });
  //     const { data } = await resp.json();
  //     setTasks(data);
  //   };
  //   getTasksLite();
  // }, []);

  return (
    <>
      <section className="card mt-5 shadow-sm">
        {props.length ? (
          props.map(({ id, title, description, status }) => (
            <div key={id}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                  <h5>{title}</h5>
                  <h6 className="card-subtitle text-muted">{description}</h6>
                </div>

                <div>
                  {/* <!-- 
        Przyciski "Add operation" i "Finish" mają być widoczne 
        tylko jeżeli status zadania jest "open" 
      --> */}
                  <button
                    hidden={status === "open" ? false : true}
                    className="btn btn-info btn-sm mr-2"
                  >
                    Add operation
                    <i className="fas fa-plus-circle ml-1"></i>
                  </button>

                  <button
                    hidden={status === "open" ? false : true}
                    className="btn btn-dark btn-sm"
                  >
                    Finish
                    <i className="fas fa-archive ml-1"></i>
                  </button>

                  {/* 
      <!-- 
        Przycisk usuwania ma być widoczny tylko 
        jeżeli nie ma żadnych operacji w zadaniu
      --> */}
                  <button className="btn btn-outline-danger btn-sm ml-2">
                    <i className="fas fa-trash false"></i>
                  </button>
                </div>
                <br></br>
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}

        {/* 
  <!-- Komponent Operations --> */}
      </section>
    </>
  );
}

export default Tasks;
