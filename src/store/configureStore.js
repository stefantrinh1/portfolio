import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import portfolioFilter from '../reducers/PortfolioFilter'
import portfolioProjects from "../reducers/PortfolioProjects"
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
          portfolioProjects:portfolioProjects,
          portfolioFilter:portfolioFilter,
        }),
        composeEnhancers(applyMiddleware(thunk))
        )
  return store
}


