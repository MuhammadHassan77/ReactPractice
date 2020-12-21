import reducer from "./reducer";
import { createStore } from "redux";

const store = createStore(reducer)

export default store;

// import reducer from "./reducer";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// const store = createStore(reducer, {}, applyMiddleware(thunk));

// export default store;