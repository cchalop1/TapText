import React from 'react';
import { TapTextHistory } from './App';
import { DownloadData } from './DownloadData';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
    clearHistory: () => void;
}

export const History: React.FC<Props> = (props) => {
    return (<div className="history">
        <button className="clear" onClick={() => props.clearHistory()}><b>Clear History</b></button>
        <DownloadData history={props.history} />
    </div>);
}