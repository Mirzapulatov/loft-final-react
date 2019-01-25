import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  getRouteRequest,
  getRouteSuccessRequest,
  getRouteFailureRequest,
  clearRoute,
  getAddressListSuccess
} from "./actions";

const coordinates = handleActions(
  {
    [getRouteRequest]: () => [],
    [getRouteSuccessRequest]: (_state, action) => action.payload,
    [getRouteFailureRequest]: () => [],
    [clearRoute]: () => []
  },
  []
);

const routeVarians = handleActions(
  {
    [getAddressListSuccess]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({ coordinates, routeVarians });
