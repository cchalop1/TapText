import React, { useEffect, useState } from 'react';

const UPDATE_TIME = 10;

interface Props {
    timer: number;
}

export const DisplayTimer: React.FC<Props> = (props) => {
    const [currentTime, setCurrentTime] = useState<number>(Date.now());

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentTime(currentTime + UPDATE_TIME);
        }, UPDATE_TIME);
        return () => clearInterval(interval);
    }, [currentTime]);

    return <p>{(() => {
        let ms = Math.round(((currentTime - props.timer) / 10) % 60);
        let s = Math.round(((currentTime - props.timer) / 1000) % 60);
        let min = Math.floor((currentTime - props.timer) / 60000);

        return `${min < 10 ? `0${min}` : min}:${s < 10 ? `0${s}` : s}:${ms < 10 ? `0${ms}` : ms}`
    })()}</p>
}