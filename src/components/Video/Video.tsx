import React from "react";
import s from './Video.module.css'

const Video = () => {
    return (
        <div className={s.videoContainer}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HQmmM_qwG4k"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video;