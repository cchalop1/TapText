import React from 'react';
import { TapTextHistory } from './App';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
}

export const ListHistory: React.FC<Props> = (props) => {
    return <div className="listHistory">{
        props.history.map((el, index) => {
            let ms = Math.round((el.time / 10) % 60);
            let s = Math.round((el.time / 1000) % 60);
            let min = Math.floor(el.time / 60000);
            let wordsPerMinute: number = (el.text.split(' ').length / (el.time / 60000));

            return (<div className="elem" key={index} >
                <div className="time">{`Time: ${min < 10 ? `0${min}` : min}:${s < 10 ? `0${s}` : s}:${ms < 10 ? `0${ms}` : ms}`}</div>
                <div className="text">{`Text: ${el.text}`}</div>
                <div className="">{`Words Per Minute: ${wordsPerMinute.toPrecision(2)}`}</div>
            </div>);
        })
    }</div>
}
