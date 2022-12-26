import Root from './Root';
import { connect } from 'react-redux';
import { getLogin } from '../../Redux/selectors/root';
import { fetchLogin, LoginAccess, UserAccess } from '../../Redux/reducers/loginRedux';
import { fetchDownloadWallet } from '../../Redux/reducers/walletRedux';

const mapStateToProps = (state: any) => ({
  login: getLogin(state)
});
const mapDispatchToProps = (dispatch: any) => ({
  loginAccess: (data: boolean) => dispatch(LoginAccess(data)),
  userAccess: (data: any) => dispatch(UserAccess(data)),
  walletList: (data: any) => dispatch(fetchDownloadWallet())
});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
