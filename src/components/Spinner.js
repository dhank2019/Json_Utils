import React from 'react';
import spinner from '../spinner.gif';

export default function Spinner(props) {
    return (
        <div>
            <img
                src={spinner}
                style={{ width: '340px', margin: 'auto', display: 'block' }}
                alt="Loading..."
            />
        </div>
    );
};