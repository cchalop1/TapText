import React from 'react';
import { TapTextHistory } from './App';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
    intiText: string;
}


export const TimeEstimate: React.FC<Props> = (props) => {
    if (props.history.length > 0) {
        return (
            <h2>{(() => {
                const dataWordsPerMinutes: Array<number> = props.history.map(el => {
                    let wordsperminute: number = (el.text.split(' ').length / (el.time / 60000));
                    return wordsperminute;
                });
                let all: number = 0;
                for (let i = 0; i < dataWordsPerMinutes.length; i++) {
                    all += dataWordsPerMinutes[i];
                }

                const estimateTime: number = props.intiText.split(' ').length / (Math.round(all / dataWordsPerMinutes.length) / 60);
                return ` ${Math.round(estimateTime * 100) / 100}s`;
            })()}</h2>
        );
    } else {
        return (null);
    }
}
