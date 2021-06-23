import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../redux/Reducers/rootReducer";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
