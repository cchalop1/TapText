import React from 'react'
import { TapTextHistory } from './App';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
}

export const LastTime: React.FC<Props> = (props) => {

    const formatTime = (time: number) => {
        let ms = Math.round((time / 10) % 60);
        let s = Math.round((time / 1000) % 60);
        let min = Math.floor(time / 60000);

        return `${min < 10 ? `0${min}` : min}:${s < 10 ? `0${s}` : s}:${ms < 10 ? `0${ms}` : ms}`
    }

    if (props.history.length === 0)
        return null;
    else
        return <h3 className="chrono-div">{formatTime(props.history[props.history.length - 1].time)}</h3>;
}