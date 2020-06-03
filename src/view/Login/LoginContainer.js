import {connect} from 'react-redux'
import * as Actions from '../../state-management/modules/login';
import * as loginSelectors from '../../state-management/modules/login/loginSelectors';
import LoginView from './LoginView';

const mapStateToProps= (state) =>{
    return {
        isLoading: loginSelectors.getLoading(state),
        user: loginSelectors.getUser(state)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        loginUser: (userDetails) => dispatch(Actions.loginUser(userDetails))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginView)