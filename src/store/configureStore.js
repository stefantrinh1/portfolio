import { createStore, combineReducers } from "redux";
import portfolioFilter from '../reducers/PortfolioFilter'
import portfolioProjects from "../reducers/PortfolioProjects"
export default () => {
    const store = createStore(
        combineReducers({
          projects:portfolioProjects,
          portfolioFilter:portfolioFilter,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
  return store
}


