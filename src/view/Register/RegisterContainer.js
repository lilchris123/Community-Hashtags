import { connect } from 'react-redux'
import * as Actions from '../../state-management/modules/register';
import * as registerSelector from '../../state-management/modules/register/registerSelectors';
import RegisterView from './RegisterView';

const mapStateToProps= (state) =>{
    return {
        isLoading: registerSelector.getLoading(state),
        user: registerSelector.getUser(state)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        registerUser: user => dispatch(Actions.registerUser(user))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterView)