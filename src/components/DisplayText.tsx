import React from 'react';
import '../style/editor.css';

interface Props {
    text: string;
    setText: (text: string) => void;
    isEdit: boolean;
    setIsEdit: (edit:boolean) => void;
}

export const DisplayText: React.FC<Props> = (props) => {

    return (
        <div className="text">
            {props.isEdit ? (<div className="text"><input
                type='text'
                value={props.text}
                onChange={(e) => props.setText(e.target.value)} />
                <button className="ok" onClick={(e) => props.setIsEdit(false)}>OK</button></div>)
                : <p>{props.text}</p>}
        </div>
    );
};