import React from 'react';
import './App.scss';
import AppRouter from "./router/AppRouter";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div className="App">
    <AppRouter />
  </div>
);

export default App;
