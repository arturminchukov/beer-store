import * as React from 'react';
import './MethodProperty.css';

export default function MethodProperty({duration, temperature}) {
    const action = duration ? `${duration} minutes` : 'Perform';

    return <p className='MethodProperty'>{action} at {temperature} °C</p>;
}
