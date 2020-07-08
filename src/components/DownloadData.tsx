import React from 'react';
import { TapTextHistory } from '../App';

const FILENAME: string = 'data-taptext.json';

interface Props {
    history: Array<TapTextHistory>;
}

export const DownloadData: React.FC<Props> = (props) => {

    const download = () => {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(props.history)));
        element.setAttribute('download', FILENAME);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    return <button className="dl-btn" onClick={(e) => download()}>Downloads Data</button>;
}
