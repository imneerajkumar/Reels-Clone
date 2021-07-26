import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, comments, channel, avatarSrc, song}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            // Stop Video
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            // Play Video
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            <video 
                ref={videoRef}
                onClick={onVideoPress}
                className="videoCard__Player"
                src={url}
                alt="IG Reel Video"
                loop
            />
            <VideoFooter 
                channel={channel}
                likes={likes}
                comments={comments}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    );
}

export default VideoCard;