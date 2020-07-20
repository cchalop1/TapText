import React from 'react';
import { TapTextHistory } from './App';
import { DownloadData } from './DownloadData';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
    clearHistory: () => void;
    isEdit: boolean;
    setIsEdit: (edit: boolean) => void;
    textareaRef: React.RefObject<HTMLTextAreaElement>;
}

export const Actions: React.FC<Props> = (props) => {
    return (<div className="history">
        {props.isEdit ?
            <button className="ok" onClick={(e) => {
                props.setIsEdit(false);
                props.textareaRef.current?.focus();
            }}>OK</button>
            :
            <button className="edit" onClick={() => props.setIsEdit(true)}><b>Edit</b></button>
        }
        <button className="clear" onClick={() => props.clearHistory()}><b>Clear History</b></button>
        <DownloadData history={props.history} />
    </div>);
}
