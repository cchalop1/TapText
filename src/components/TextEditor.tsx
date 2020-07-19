import React from 'react';
import '../style/editor.css';

interface Props {
    isSameText: boolean;
    setSameText: (arg: boolean) => void;
    isActive: boolean;
    setIsActive: (arg: boolean) => void;
    setTimer: (arg: number) => void;
    text: string;
    setText: (text: string) => void;
    audio: HTMLAudioElement | null;
    initText: string;
}

export const checkSameValue = (str: string, initStr: string) => {
    if (str.length > initStr.length)
        return false;
    for (let i = 0; i < str.length && i < initStr.length; i++) {
        if (str[i] !== initStr[i])
            return false;
    }
    return true;
};

export const TextEditor: React.FC<Props> = (props) => {
    let borderColor: string | null = null;

    if (props.isActive === true) {
        borderColor = props.isSameText ? 'green' : 'red';
    } else {
        borderColor = 'black';
    }

    return (
        <textarea
            autoFocus
            className="editor"
            value={props.text}
            placeholder="Write text here !"
            style={{
                borderColor: borderColor,

            }}
            onChange={e => {
                if (!props.isActive) {
                    props.setTimer(Date.now());
                    props.setIsActive(true);
                }
                props.setText(e.target.value);
                const tmp = checkSameValue(e.target.value, props.initText);
                if (!tmp && props.audio !== null)
                    props.audio.play();
                props.setSameText(tmp);
            }} />
    );
};
