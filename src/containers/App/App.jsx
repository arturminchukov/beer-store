import {connect} from 'react-redux';
import App from '../../components/App/App';
import {navigate} from '../../actions/route';

const mapDispatchToProps = dispatch => ({
    routeNavigate: (path, parameters) => dispatch(navigate(path, parameters)),
});

export default connect(null, mapDispatchToProps)(App);
