import React, { useState } from 'react';
import '../style/editor.css';
import { wordsFr, wordsUs } from '../assets/listWords';

interface Props {
    intiText: string;
    audio: HTMLAudioElement | null;
    setText: (text: string) => void;
    setAudio: (param: HTMLAudioElement | null) => void;
    setInitText: (initText: string) => void;
    lang: Array<boolean>
    setLang: (param: Array<boolean>) => void;
}



export const EditOption: React.FC<Props> = (props) => {
    const [nbWords, setNbWords] = useState<number>(1);

    const buildRandomString = (nb: number) => {
        let newInitText: string = '';
        for (let i = 0; i < nb; i++) {
            let word = ''
            if (props.lang[0])
                word = wordsFr[Math.floor((Math.random() * wordsFr.length) + 1)];
            else if (props.lang[1])
                word = wordsUs[Math.floor((Math.random() * wordsFr.length) + 1)];
            newInitText += word;
            if (i !== nb - 1)
                newInitText += ' ';
        }
        return newInitText;
    }

    return (<div className="option"><input
        type='text'
        value={props.intiText}
        onChange={(e) => props.setText(e.target.value)} />
        <div>
            <input type="range" min="1" max="40" value={nbWords} className="nb-words" onChange={(e) => {
                const nb: number = Number(e.target.value);
                setNbWords(nb);
                props.setInitText(buildRandomString(nb));
            }} />
            <input type="checkbox" checked={props.lang[0]} onChange={() => {
                props.setLang([true, false]);
            }} />fr
            <input type="checkbox" checked={props.lang[1]} onChange={() => {
                props.setLang([false, true]);
            }} />us
        </div>
        <div><input
            className="btn-audio"
            type="checkbox"
            defaultChecked={props.audio === null ? false : true}
            onChange={() => {
                props.setAudio(props.audio === null ? new Audio('https://lasonotheque.org/UPLOAD/mp3/1111.mp3') : null);
            }}
        /> audio</div>
    </div>);
}