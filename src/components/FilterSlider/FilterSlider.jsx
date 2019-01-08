import * as React from 'react';
import './FilterSlider.css';

export function FilterSlider(props) {
    const {
        title,
        value,
        handleChange,
        name,
        min,
        max,
    } = props;

    return (
        <div className='FilterSlider__scale'>
            <div className='FilterSlider__title'>{title}</div>
            <div className='FilterSlider__input'>
                <div className='FilterSlider__input-indicator'>{value}</div>
                <input
                    onChange={handleChange}
                    className='FilterSlider__input-range'
                    name={name}
                    type='range'
                    min={min}
                    max={max}
                    step='1'
                    value={value}
                />
            </div>
        </div>
    );
}
