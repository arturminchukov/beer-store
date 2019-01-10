import * as React from 'react';
import './InfoItemBox.css';

export function InfoItemBox(props) {
    return (
        <div className='InfoItemBox'>
            {props.children}
        </div>
    );
}
