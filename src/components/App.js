import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtubeApi from "../apis/youtube";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchTermSubmit("");
  }

  onSearchTermSubmit = async term => {
    const { data } = await youtubeApi.get("/search", { params: { q: term } }); // response
    this.setState({
      videos: data.items,
      selectedVideo: data.items[0]
    });
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
