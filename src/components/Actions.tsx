import React from 'react';
import { TapTextHistory } from './App';
import { DownloadData } from './DownloadData';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
    clearHistory: () => void;
    isEdit: boolean;
    setIsEdit: (edit: boolean) => void;
}

export const Actions: React.FC<Props> = (props) => {
    return (<div className="history">
        <button className="edit" onClick={() => props.setIsEdit(!props.isEdit)}><b>Edit</b></button>
        <button className="clear" onClick={() => props.clearHistory()}><b>Clear History</b></button>
        <DownloadData history={props.history} />
    </div>);
}