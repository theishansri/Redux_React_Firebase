import { createStore, applyMiddleware, compose } from "redux";
import reduxImmumatableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./Reducer/index";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmumatableStateInvariant()))
  );
}
