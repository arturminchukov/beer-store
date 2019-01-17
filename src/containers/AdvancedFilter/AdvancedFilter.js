import {connect} from 'react-redux';
import AdvancedFilter from '../../components/AdvancedFilter/AdvancedFilter';
import {updateQueryParams} from '../../actions/route';


const mapDispatchToProps = dispatch => ({
    handleQueryParams: queryParams => dispatch(updateQueryParams(queryParams)),
});

export default connect(null, mapDispatchToProps)(AdvancedFilter);
