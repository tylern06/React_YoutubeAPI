import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from "./components/app";
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
const api_key = "AIzaSyBGTKNH-5LKZ5abSWB2vXN0rORrm4_UoPg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    //set the initial state of the videos
    YTSearch({ key: api_key, term: "samsung note 9" }, videos => {
      // this.setState({ videos: videos });
      this.setState({ videos });
      console.log("videios", this.state.videos);
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
