import { connect } from 'react-redux';

import TodoList from '../Components/TodoList';

const mapStateToProps = (state) => {
    return {
        TodoList: state.TodoList.TodoList,
        filter: state.navList.filter
    };
}

export default connect(mapStateToProps)(TodoList);