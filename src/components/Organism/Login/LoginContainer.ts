import { connect } from 'react-redux';
import { Login } from './Login';
import { fetchBooks, LoginAccess } from '../../../Redux/reducers/loginRedux';

const mapDispatchToProps = (dispatch: any) => ({
  loginAccess: (book: any) => dispatch(fetchBooks(book))
});

export default connect(null, mapDispatchToProps)(Login);
