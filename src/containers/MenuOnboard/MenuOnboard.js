import {connect} from 'react-redux';
import {navigate} from '../../actions/route';
import MenuOnboard from '../../components/MenuOnboard/MenuOnboard';

const mapDispatchToProps = dispatch => ({
    routeNavigate: (path, parameters) => dispatch(navigate(path, parameters)),
});

export default connect(null, mapDispatchToProps)(MenuOnboard);
