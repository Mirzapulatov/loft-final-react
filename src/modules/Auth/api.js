import urls from "../../constants/backend";

export const login = (username, password) =>
  fetch(
    `${urls.BASE_URL}${urls.LOGIN}?username=${username}&password=${password}`
  ).then(response => response.json());
