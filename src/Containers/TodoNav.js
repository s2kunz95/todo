import { connect } from 'react-redux'

import TodoNav from '../Components/TodoNav';
import {switchTab} from '../Redux/TodoNav';

const mapStateToProps = (state) => {
    return {
        navList: state.navList.navList,
    };
}

const mapActionsToProps = {
    switchTab: switchTab
}

export default connect(mapStateToProps, mapActionsToProps)(TodoNav);