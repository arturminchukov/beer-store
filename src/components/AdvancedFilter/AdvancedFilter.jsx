import * as React from 'react';
import './AdvancedFilter.css';
import FilterSlider from '../FilterSlider/FilterSlider';
import debounce from '../../helper/debounce';

export default class AdvancedFilter extends React.Component {
    constructor(props) {
        super(props);

        const state = {};

        props.filterScales.forEach((scale) => {
            state[scale.abbreviation] = scale.initValue;
        });

        this.state = state;
        this.handleChange = this.updateRangeValue.bind(this);
        this.debouncedHandleQuery = debounce(props.handleQueryParams, 700);
    }

    updateRangeValue(event) {
        const {value, name} = event.currentTarget;

        if (value && name) {
            this.debouncedHandleQuery({
                [name]: value,
            });

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
                        value={this.state[scale.abbreviation]}
                        key={scale.title}
                        title={scale.title}
                        handleChange={this.handleChange}
                        name={scale.abbreviation}
                        min={scale.min}
                        max={scale.max}
                    />
                ))}
            </div>
        );
    }
}
