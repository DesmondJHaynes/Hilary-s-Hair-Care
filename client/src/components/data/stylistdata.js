const _apiURL = "/api/stylists";

export const getStylists = () => {
  return fetch(_apiURL).then((r) => r.json());
};

export const getStylistbyId = (id) => {
  return fetch(`${_apiURL}/${id}`).then((r) => r.json());
};

export const createStylist = async (stylistObj) => {
  await fetch(_apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(stylistObj),
  });
};
