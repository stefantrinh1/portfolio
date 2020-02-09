import React from "react";
import AppRouter from "./router/AppRouter";
import ScrollUpButton from "react-scroll-up-button";
import Store from "./store/configureStore";
import { createStore } from "redux";
import { Provider } from "react-redux"
import "./App.scss";

const store = createStore(Store)

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
