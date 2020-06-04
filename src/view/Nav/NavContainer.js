import { connect} from 'react-redux';
// import * as Actions from '../../state-management/modules/user';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import NavView from './NavView';

const mapStateToProps= (state) =>{
    return{
        isLoggedIn: userSelectors.getLoggedIn(state),
        user: userSelectors.getUser(state)
    }
}

const mapDispatchToProps= (dispatch) =>{
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavView)