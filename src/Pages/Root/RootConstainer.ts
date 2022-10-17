import Root from './Root';
import { connect } from 'react-redux';
import { getLogin } from '../../Redux/selectors/root';

const mapStateToProps = (state: any) => ({
  login: getLogin(state)
});
export default connect(mapStateToProps)(Root);
