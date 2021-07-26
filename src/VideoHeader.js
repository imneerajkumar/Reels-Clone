import React from "react";
import "./VideoHeader.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';


function VideoHeader() {
    return (
        <div className="videoHeader">
            <NavigateBeforeIcon />
            <h3>Reels</h3>
            <CameraAltOutlinedIcon />
        </div>
    );
}

export default VideoHeader;