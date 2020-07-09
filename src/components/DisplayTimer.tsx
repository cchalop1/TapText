import React, { useEffect, useState } from 'react';
import '../style/editor.css';

const UPDATE_TIME = 10;

interface Props {
    timer: number;
    isActive: boolean;
}

export const DisplayTimer: React.FC<Props> = (props) => {
    const [currentTime, setCurrentTime] = useState<number>(Date.now());

    useEffect(() => {
        if (props.isActive) {
            setCurrentTime(Date.now());
            let interval = setInterval(() => {
                setCurrentTime(currentTime + UPDATE_TIME);
            }, UPDATE_TIME);
            return () => clearInterval(interval);
        }
    }, [currentTime, props.isActive]);

    if (props.isActive) {
        return (<h1 className="chrono">{(() => {
            let ms = Math.round(((currentTime - props.timer) / 10) % 60);
            let s = Math.round(((currentTime - props.timer) / 1000) % 60);
            let min = Math.floor((currentTime - props.timer) / 60000);

            return `${min < 10 ? `0${min}` : min}:${s < 10 ? `0${s}` : s}:${ms < 10 ? `0${ms}` : ms}`
        })()}</h1>);
    } else {
        return (<h1 className="chrono">00:00:00</h1>)
    }
}