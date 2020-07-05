import React, { useState } from 'react';
import { initialValue } from '../initialValue';
import '../style/editor.css';

interface Props {
    sameText: (arg0: boolean) => void
}

export const TextEditor: React.FC<Props> = (props) => {
    const [value, setValue] = useState('');

    const compStrWithInitialValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const str = e.target.value;
        if (str.length > initialValue.length)
            return false;
        for (let i = 0; i < str.length && i < initialValue.length; i++) {
            if (str[i] !== initialValue[i])
                return false;
        }
        return true;
    }

    return (
        <textarea className='editor' value={value} placeholder='Ecrit ici pour demarer le conteur' onChange={e => {
            setValue(e.target.value);
            props.sameText(compStrWithInitialValue(e));
        }} />
    );
};

