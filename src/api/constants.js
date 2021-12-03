/**
 * @param {function} successCallback - Function that saves incoming data
 */

const API_URL = "https://todo-api.coderslab.pl/api";

const API_KEY = "639297ab-41f3-4028-9496-2951f6ae8d7f";

const getTasks = async (successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      headers: {
        Authorization: API_KEY,
      },
    });

    const {data} = await response.json();
    console.log(data);
    if (data.error || typeof successCallback !== "function") {
      throw new Error("Błąd!");
    }

    successCallback(data.data);
  } catch (err) {
    console.log(err);
  }
};

export { API_URL, API_KEY, getTasks };
