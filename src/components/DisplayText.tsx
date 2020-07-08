import React, { useState } from 'react';
import '../style/editor.css';

interface Props {
    text: string;
    setText: (text: string) => void;
}

export const DisplayText: React.FC<Props> = (props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    return (
        <div className="text">
            {isEdit ? (<div><input
                type='text'
                value={props.text}
                onChange={(e) => props.setText(e.target.value)} />
                <button className="btn ok" onClick={(e) => setIsEdit(!isEdit)}>OK</button></div>)
                : <p onClick={(e) => setIsEdit(!isEdit)}>{props.text}</p>}
        </div>
    );
};