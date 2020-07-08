import React from 'react';
import '../style/editor.css';

interface Props {
    setSameText: (arg: boolean) => void;
    isActive: boolean;
    setIsActive: (arg: boolean) => void;
    setTimer: (arg: number) => void;
    text: string;
    setText: (text: string) => void;
    initText: string;
    timer: number;
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
    return (
        <textarea
            className='editor'
            value={props.text}
            onChange={e => {
                if (!props.isActive) {
                    props.setTimer(Date.now());
                    props.setIsActive(true);
                }
                props.setText(e.target.value);
                props.setSameText(checkSameValue(e.target.value, props.initText));
            }} />
    );
};

