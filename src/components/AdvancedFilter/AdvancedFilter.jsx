import * as React from 'react';
import './AdvancedFilter.css';
import {FilterSlider} from '../FilterSlider/FilterSlider';

export class AdvancedFilter extends React.Component {
    constructor(props) {
        super(props);

        const scales = Object.values(props.filterScales);

        this.state = {};

        scales.forEach((scale) => {
            this.state[scale.name] = scale.initValue;
        });

        this.handleChange = this.updateRangeValue.bind(this);
    }

    updateRangeValue(event) {
        const {value, name} = event.currentTarget;

        if (value && name) {
            this.setState({
                [name]: value,
            });
        }
    }

    render() {
        const scales = Object.values(this.props.filterScales);

        return (
            <div className='AdvancedFilter'>
                {scales.map(scale => (
                    <FilterSlider
                        value={this.state[scale.name]}
                        title={scale.title}
                        handleChange={this.handleChange}
                        name={scale.name}
                        min={scale.min}
                        max={scale.max}
                    />
                ))}
            </div>
        );
    }
}
