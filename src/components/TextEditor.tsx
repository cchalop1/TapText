import React, { useState, useEffect } from 'react';
import { initialValue } from '../initialValue';
import '../style/editor.css';

interface Props {
    setSameText: (arg: boolean) => void;
    isActive: boolean;
    setIsActive: (arg: boolean) => void;
    setTimer: (arg: number) => void;
}

export const TextEditor: React.FC<Props> = (props) => {
    const [value, setValue] = useState<string>('');

    const checkSameValue = (str: string) => {
        if (str.length > initialValue.length)
            return false;
        for (let i = 0; i < str.length && i < initialValue.length; i++) {
            if (str[i] !== initialValue[i])
                return false;
        }
        return true;
    }

    useEffect(() => {
        if (value === '') {
            props.setIsActive(false);
            props.setTimer(0);
        }
    }, [value, props.isActive]);

    return (
        <textarea
            className='editor'
            value={value}
            onChange={e => {
                if (!props.isActive) {
                    props.setTimer(Date.now());
                    props.setIsActive(true);
                }
                setValue(e.target.value);
                props.setSameText(checkSameValue(e.target.value));
            }} />
    );
};

