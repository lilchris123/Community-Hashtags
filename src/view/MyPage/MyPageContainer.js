import {connect} from 'react-redux';
import * as Actions  from '../../state-management/modules/user';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import MyPageView from './MyPageView';

const mapStateToProps = (state) =>{
    return{
        user: userSelectors.getUser(state),
        isLoggedIn: userSelectors.getLoggedIn(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getUserFromToken: () => dispatch(Actions.getUserFromToken()),
        logoutUser: () => dispatch(Actions.logoutUser())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MyPageView) ;