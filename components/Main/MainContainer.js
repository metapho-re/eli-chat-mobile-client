import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
    isAuthenticated: state.authenticate.isAuthenticated,
});

export default connect(mapStateToProps)(Main);
