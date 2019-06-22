import { connect } from 'react-redux';
import Loader from './Loader';

const mapStateToProps = state => ({
    usersIsLoading: state.usersStatus.isLoading,
    messagesIsLoading: state.messagesStatus.isLoading,
});

export default connect(mapStateToProps)(Loader);
