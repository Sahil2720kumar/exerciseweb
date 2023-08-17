import rootReducer from "./reducers/index.js";
const {createStore,applyMiddleware} = Redux;

const store = createStore(
   rootReducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export default store;



