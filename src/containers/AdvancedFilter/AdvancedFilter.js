import {connect} from 'react-redux';
import AdvancedFilter from '../../components/AdvancedFilter/AdvancedFilter';

const mapStateToProps = state => ({
    query: state && state.route && state.route.query,
});


export default connect(mapStateToProps)(AdvancedFilter);
