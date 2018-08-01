import React, { Component } from "react";
import ReactDOM from "react-dom";

export const VideoListItem = ({ video, onVideoSelect }) => {
  //same as es6 {video} as param, has to match props name
  // const video = props.video;
  console.log("video in list", video);
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
// constructor(props) {
//   super(props);
// }
// render() {
//   let videoItem = this.props.videos.map(function(video) {
//     return (
//       <li key={video.etag}>
//         <iframe
//           width={video.snippet.thumbnails.high.width}
//           height={video.snippet.thumbnails.high.height}
//           src={`http://www.youtube.com/embed/${video.id.videoId}`}
//         />
//       </li>
//     );
//   });
//   return videoItem;
// }
// }
