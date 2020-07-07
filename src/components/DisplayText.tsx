import React, { useState } from 'react';
import '../style/editor.css';

interface Props {
    text: string;
    setText: (text: string) => void;
}

export const DisplayText: React.FC<Props> = (props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    return (
        <div className='text'>
            {isEdit ? <input
                type='text'
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}></input>
                : <p>{props.text}</p>}
            <button onClick={(e) => setIsEdit(!isEdit)}>Edit</button>
        </div>
    );
};