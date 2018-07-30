import React, { Component } from "react";
import { VideoListItem } from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });
  console.log(videoItems);
  return (
    <ul className="col-md-4 list-group">
      {/* <VideoListItem videos={props.videos} /> */}
      {videoItems}
    </ul>
  );
};

export default VideoList;
