import React, {useRef, useState} from 'react';
import './VideoCard.css'
import VideoHeader from "./VideoHeader";

function VideoCard() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () => {
        if (isVideoPlaying) {
            // stop video
            videoRef.current.pause();
            setIsVideoPlaying(false)
        } else {
            videoRef.current.play()
            setIsVideoPlaying(true)
            //start video
        }
    }
    return (
        <div className="videoCard">
            <VideoHeader></VideoHeader>
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className='video__player'
                alt='IG reel video'
                loop>
                <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm"/>
                {/*<source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg"/>*/}
            </video>
        </div>
    );

}

export default VideoCard
