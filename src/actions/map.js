import { createAction } from "redux-actions";

export const getRouteRequest = createAction("GET_ROUTE_REQUEST");
export const getRouteSuccessRequest = createAction("GET_ROUTE_SUCCESS_REQUEST");
export const getRouteFailureRequest = createAction("GET_ROUTE_FAILURE_REQUEST");
export const clearRoute = createAction("CLEAR_ROUTE");
export const getAddressList = createAction("GET_ADDRESS_LIST");
export const getAddressListSuccess = createAction("GET_ADDRESS_LIST_SUCCESS");
