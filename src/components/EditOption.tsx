import React from 'react';
import '../style/editor.css';

interface Props {
    intiText: string;
    audio: HTMLAudioElement | null;
    setText: (text: string) => void;
    setAudio: (param: HTMLAudioElement | null) => void;
}

export const EditOption: React.FC<Props> = (props) => {
    return (<div className="option"><input
        type='text'
        value={props.intiText}
        onChange={(e) => props.setText(e.target.value)} />
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