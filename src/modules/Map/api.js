import urls from "../../constants/backend";

export const route = (fromWhere, toWhere) =>
  fetch(
    `${urls.BASE_URL}${
      urls.GET_ROUTE
    }?address1=${fromWhere}&address2=${toWhere}`
  ).then(response => response.json());

export const addressList = (fromWhere, toWhere) =>
  fetch(`${urls.BASE_URL}${urls.GET_ADRESS_LIST}`).then(response =>
    response.json()
  );
