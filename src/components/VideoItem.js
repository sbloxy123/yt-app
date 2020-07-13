import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            {/* ^have to use arrow function to put the video in [see bottom note]*/}
            <img alt={video.snippet.title}
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header"> {video.snippet.title} </div>
            </div>
        </div>
    )
}

export default VideoItem;

//onVideoSelect passed down from VideoList.. which was passed from App