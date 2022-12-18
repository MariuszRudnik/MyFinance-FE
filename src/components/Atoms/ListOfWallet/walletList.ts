import { connect } from 'react-redux';
import { fetchDownloadWallet } from '../../../Redux/reducers/walletRedux';
import { ListOfWallet } from './ListOfWallet';

const mapDispatchToProps = (dispatch: any) => ({
  walletList: (data: any) => dispatch(fetchDownloadWallet())
});

export default connect(null, mapDispatchToProps)(ListOfWallet);
