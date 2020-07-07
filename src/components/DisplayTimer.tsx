import React, { useEffect, useState } from 'react';

const UPDATE_TIME = 10;

interface Props {
    timer: number;
}

export const DisplayTimer: React.FC<Props> = (props) => {
    const [currentTime, setCurrentTime] = useState<number>(Date.now());

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentTime(currentTime + UPDATE_TIME);
        }, UPDATE_TIME);
        return () => clearInterval(interval);
    }, [currentTime]);

    return <p>{currentTime - props.timer}</p>;
}