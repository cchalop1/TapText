import React from 'react';

interface Props {
    isSameText: boolean;
}

export const Light: React.FC<Props> = (props) => {
    return (<div className="light" style={{
        backgroundColor: props.isSameText ? 'green' : 'red',
    }}></div>);
}