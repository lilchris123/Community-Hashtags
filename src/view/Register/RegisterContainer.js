import { connect } from 'react-redux'
import * as Actions from '../../state-management/modules/user';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import RegisterView from './RegisterView';

const mapStateToProps= (state) =>{
    return {
        isLoading: userSelectors.getLoading(state),
        user: userSelectors.getUser(state)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        registerUser: user => dispatch(Actions.registerUser(user))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterView)