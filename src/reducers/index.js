import { combineReducers } from "redux";

import user from "./user";
import map from "./map";
import order from "./order";

export default combineReducers({ user, map, order });
