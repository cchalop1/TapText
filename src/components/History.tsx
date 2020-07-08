import React from 'react';
import { TapTextHistory } from '../App';
import { ListHistory } from './ListHistory';
import { DownloadData } from './DownloadData';

interface Props {
    history: Array<TapTextHistory>;
    clearHistory: () => void;
}

export const History: React.FC<Props> = (props) => {
    return (<div className="history">
        <ListHistory history={props.history} />
        <button className="btn clear" onClick={() => props.clearHistory()}>Clear History</button>
        <DownloadData history={props.history} />
    </div>);
}