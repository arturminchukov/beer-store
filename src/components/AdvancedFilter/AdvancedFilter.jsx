import * as React from 'react';
import './AdvancedFilter.css';
import FilterSlider from '../FilterSlider/FilterSlider';

export default class AdvancedFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        props.filterScales.forEach((scale) => {
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
        return (
            <div className='AdvancedFilter'>
                {this.props.filterScales.map(scale => (
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
