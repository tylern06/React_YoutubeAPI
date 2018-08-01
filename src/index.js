import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from "./components/app";
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    //set the initial state of the videos
    this.videoSearch("samsung note 9");
  }

  videoSearch(term) {
    YTSearch({ key: api_key, term: term }, videos => {
      // this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // console.log("videios", this.state.videos);
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
