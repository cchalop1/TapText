import React, { useState } from 'react';
import { initialValue } from '../initialValue';
import '../style/editor.css';

export const DisplayText : React.FC = () => {
    const [value, ] = useState(initialValue);

    return (
        <div className='text'>
            <h2>{value}</h2>
        </div>
    );
};