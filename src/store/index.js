import { createStore, combineReducers } from "redux";

import notes from "./reducers/notes.reducer";

const rootReducer = combineReducers({
  notes,
});
export default createStore(rootReducer);
