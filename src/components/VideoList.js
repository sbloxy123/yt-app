import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => { 
    //use ({ .. }) instead of props (new es15synax allows)
    //to shorten below videos.length syntax from props.videos.length
        const renderedList = videos.map((video) => {
            return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>  //pass current video in each loop to VideoItem
        })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList