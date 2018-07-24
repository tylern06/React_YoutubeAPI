import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from "./components/app";
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
const api_key = "AIzaSyBGTKNH-5LKZ5abSWB2vXN0rORrm4_UoPg";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
