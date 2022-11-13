import { connect } from 'react-redux';
import { AddWalletComponents } from './AddWalletComponents';
import { AddWallet, fetchAddWallet } from '../../../Redux/reducers/walletRedux';

const mapDispatchToProps = (dispatch: any) => ({
  addWallet: (data: any) => dispatch(fetchAddWallet(data))
});

export default connect(null, mapDispatchToProps)(AddWalletComponents);
