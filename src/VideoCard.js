import React, {Component, useState} from 'react';
import './VideoCard.css'

function VideoCard() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    
    return (
        <div className="videoCard">
            <img
                className='video__player'
                src='./instagram_logo.png'
                alt='IG reel video'
                // loop
            />
        </div>
    );

}

export default VideoCard
