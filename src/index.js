import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./store/Reducer";
import 'aos/dist/aos.css'; 
import AOS from 'aos';    

AOS.init({
  offset: 200,
  duration: 800,
  delay: 0
}); 

const store = legacy_createStore(Reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
