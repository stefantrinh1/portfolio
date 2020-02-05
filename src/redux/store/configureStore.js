import { createStore, combineReducers } from "redux";
import navigationReducer from '../reducers/Navigation'

export default () => {
    const store = createStore(
        combineReducers({
          navigation:navigationReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
  return store
}


