import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, getTasks } from "./api/constants";

export default function Operations() {
  return (
    <div>
      <div class="card-body">
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Operation description"
            />

            <div class="input-group-append">
              <button class="btn btn-info">
                Add
                <i class="fas fa-plus-circle ml-1"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <ul class="list-group list-group-flush">
        {/* <!-- Komponenty Operation --> */}
      </ul>
    </div>
  );
}
