import Root from './Root';
import { connect } from 'react-redux';
import { getLogin } from '../../Redux/selectors/root';
import { fetchLogin, LoginAccess, UserAccess } from '../../Redux/reducers/loginRedux';

const mapStateToProps = (state: any) => ({
  login: getLogin(state)
});
const mapDispatchToProps = (dispatch: any) => ({
  //loginAccess: (data: any) => dispatch(fetchBooks(data)),
  loginAccess: (data: any) => dispatch(LoginAccess(data)),
  userAccess: (data: any) => dispatch(UserAccess(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
