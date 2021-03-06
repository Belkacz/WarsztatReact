import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, getTasks } from "./api/constants";
import Operations from "./Operations";

function Tasks({ props, remover, finisher }) {
  const [operationsForm, setForm] = useState(true);
  const [operations, setOperations] = useState([]);

  return (
    <div>
      <section class="card mt-5 shadow-sm ">
        {props.length ? (
          props.map(({ id, title, description, status }) => (
            <div key={id + title + description}>
              <div className="card-header d-flex justify-content-between align-items-center display-inline-block ">
                <div>
                  <h5>{title}</h5>
                  <h6 className="card-subtitle text-muted">{description}</h6>
                </div>

                <div className="display-inline-block">

                  <button
                    onClick={(e) => {
                      setForm(false);
                    }}
                    hidden={status === "open" ? false : true}
                    className="btn btn-info btn-sm mr-2"
                  >
                    Add operation
                    <i className="fas fa-plus-circle ml-1"></i>
                  </button>

                  <button
                    onClick={(e) => finisher(id, status)}
                    hidden={status === "open" ? false : true}
                    className="btn btn-dark btn-sm"
                  >
                    Finish
                    <i className="fas fa-archive ml-1"></i>
                  </button>

                  <button
                    hidden={status === "open" ? true : false}
                    onClick={(e) => remover(id, title, description, status)}
                    className="btn btn-outline-danger btn-sm ml-2"
                  >
                    <i className="fas fa-trash false"></i>
                  </button>
                </div>
                <br></br>
              </div>
              <div>
                <Operations taskId={id} operationsForm={operationsForm} />
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}

        {/*  <AddOperations />
  <!-- Komponent Operations --> */}
      </section>
    </div>
  );
}

export default Tasks;
