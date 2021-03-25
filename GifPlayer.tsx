import React, { useState } from "react";

import cn from "./GifPlayer.less";

interface GifPlayerProps {
    gif: string;
    image: string;
}

export function GifPlayer({ gif, image }: GifPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlaying = () => setIsPlaying(!isPlaying);

    return (
        <div data-tid="GifPlayer" onClick={isPlaying ? togglePlaying : undefined} className={cn("gif-player")}>
            {!isPlaying && <button data-tid="Play" onClick={togglePlaying} className={cn("button")}></button>}

            <img data-tid="Content" className={cn("content")} src={isPlaying ? gif : image} alt="Загрузка..." />
        </div>
    );
}
