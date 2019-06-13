import React from 'react';
import './App.scss';
import AppRouter from "./router/AppRouter";

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// event listener for when screen changes size
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

class App extends React.Component {

  render() {

  
      return (

        <div className="App">
          <AppRouter />
        </div>
   
      )
  }
}


export default App;
