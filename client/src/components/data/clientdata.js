const _apiURL = "/api/customers";

export const getClients = () => {
  return fetch(_apiURL).then((r) => r.json());
};

export const getClientbyId = (id) => {
  return fetch(`${_apiURL}/${id}`).then((r) => r.json());
};

export const createClient = async (clientObj) => {
  await fetch(_apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clientObj),
  });
};
