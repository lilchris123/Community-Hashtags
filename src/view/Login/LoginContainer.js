import {connect} from 'react-redux'
import * as Actions from '../../state-management/modules/user';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import LoginView from './LoginView';

const mapStateToProps= (state) =>{
    return {
        isLoading: userSelectors.getLoading(state),
        user: userSelectors.getUser(state)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        loginUser: (userDetails) => dispatch(Actions.loginUser(userDetails))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginView)