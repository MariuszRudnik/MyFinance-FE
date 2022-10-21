import { connect } from 'react-redux';
import { Login } from './Login';
import { fetchLogin, LoginAccess } from '../../../Redux/reducers/loginRedux';

const mapDispatchToProps = (dispatch: any) => ({
  loginAccess: (book: any) => dispatch(fetchLogin(book))
});

export default connect(null, mapDispatchToProps)(Login);
