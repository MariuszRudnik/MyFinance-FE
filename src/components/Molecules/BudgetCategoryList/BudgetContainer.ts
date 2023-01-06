import { connect } from 'react-redux';
import { fetchLogin, LoginAccess } from '../../../Redux/reducers/loginRedux';
import { BudgetCategoryList } from './BudgetCategoryList';

const mapDispatchToProps = (dispatch: any) => ({
  loginAccess: (book: any) => dispatch(fetchLogin(book))
});
const mapStateToProps = (state: any) => ({
  booksLength: (state: any) => state
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCategoryList);
