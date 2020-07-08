import React from 'react';
import { TapTextHistory } from '../App';
import { ListHistory } from './ListHistory';
import { DownloadData } from './DownloadData';

interface Props {
    history: Array<TapTextHistory>;
}

export const History: React.FC<Props> = (props) => {
    return (<div className="history">
        <ListHistory history={props.history} />
        <DownloadData history={props.history} />
    </div>);
}