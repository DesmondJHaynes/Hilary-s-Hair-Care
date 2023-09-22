const _apiURL = "/api/appointments";

export const getApptList = () => {
  return fetch(_apiURL).then((res) => res.json());
};

export const getApptById = (id) => {};
