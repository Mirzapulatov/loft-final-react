import { createAction } from "redux-actions";

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccessRequest = createAction("LOGIN_SUCCESS_REQUEST");
export const loginFailureRequest = createAction("LOGIN_FAILURE_REQUEST");
export const logout = createAction("LOGOUT");
