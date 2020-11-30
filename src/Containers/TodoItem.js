import { connect } from 'react-redux';

import TodoItem from '../Components/TodoItem';
import { itemClick, removeItem } from '../Redux/TodoList';

const mapStateToProps = (state) => {
    return {
        TodoList: state.TodoList.TodoList
    };
}

const mapActionsToProps = {
    onItemClick: itemClick,
    removeItem: removeItem
}

export default connect(mapStateToProps, mapActionsToProps)(TodoItem);