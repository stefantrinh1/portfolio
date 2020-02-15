import React from "react";
import AppRouter from "./router/AppRouter";
import ScrollUpButton from "react-scroll-up-button";
import configureStore from './store/configureStore'
import { Provider } from "react-redux"
import "./App.scss";

const store = configureStore()

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
        <ScrollUpButton />
      </Provider>
    </div>
  );
};

export default App;
