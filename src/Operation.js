import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, getTasks } from "./api/constants";

export default function Operation({ id, description, timeSpent , setReFresh}) {

  const remover = async (e, id) => {

    e.preventDefault();
    const resp = await fetch(`${API_URL}/operations/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    });
    setReFresh(true)
  };

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          {description}
          <span class="badge badge-success badge-pill ml-2">{timeSpent}</span>
        </div>
        <form>
          <div class="input-group input-group-sm">
            <input
              type="number"
              class="form-control"
              placeholder="Spent time in minutes"
              width="12rem"
            />

            <div class="input-group-append">
              <button class="btn btn-outline-success">
                <i class="fas fa-save"></i>
              </button>

              <button
                onClick={(e) => {
                  remover(e, id);
                }}
                class="btn btn-outline-dark"
              >
                <i class="fas fa-times false"></i>
              </button>
            </div>
          </div>
        </form>
      </li>
    </div>
  );
}
