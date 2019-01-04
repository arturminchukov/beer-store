import * as React from 'react';
import './AdvancedFilter.css';

const FILTER_PROPERTY = {
    alcohol: {
        name: 'alcohol',
        title: 'Alcohol by volume',
        min: 2,
        max: 14,
        initValue: 8,
    },
    bitterness: {
        name: 'bitterness',
        title: 'International bitterness units',
        min: 0,
        max: 120,
        initValue: 60,
    },
    color: {
        name: 'color',
        title: 'Color by EBC',
        min: 4,
        max: 80,
        initValue: 42,
    },
};

export class AdvancedFilter extends React.Component {
    constructor(props) {
        super(props);

        const scales = Object.values(FILTER_PROPERTY);

        this.state = {};

        scales.forEach((scale) => {
            this.state[scale.name] = scale.initValue;
        });

        this.handleChange = this.updateRangeValue.bind(this);
    }

    updateRangeValue(event) {
        const {value, name} = event.currentTarget;

        if (value || name || FILTER_PROPERTY[name]) {
            this.setState({
                [name]: value,
            });
        }
    }

    render() {
        const scales = Object.values(FILTER_PROPERTY);

        return (
            <div className='AdvancedFilter'>

                {scales.map(scale => (
                    <div className='AdvancedFilter__scale'>
                        <div className='AdvancedFilter__title'>{scale.title}</div>
                        <div className='AdvancedFilter__input'>
                            <div className='AdvancedFilter__input-indicator'>{this.state[scale.name]}</div>
                            <input
                                onChange={this.handleChange}
                                className='AdvancedFilter__input-range'
                                name={scale.name}
                                type='range'
                                min={scale.min}
                                max={scale.max}
                                step='1'
                                value={this.state[scale.name]}
                            />
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}
