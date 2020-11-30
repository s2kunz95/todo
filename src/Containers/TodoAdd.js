import { connect } from 'react-redux';
import TodoAdd from '../Components/TodoAdd';
import { isTyping, addTask } from '../Redux/TodoList';

const mapStateToProps = (state) => {
    return {
        TodoList: state.TodoList.TodoList,
        newItem: state.TodoList.newItem,
        typing: state.TodoList.typing
    };
};

const mapActionsToProps = {
    isTyping: isTyping,
    addTask: addTask
}

export default connect(mapStateToProps, mapActionsToProps)(TodoAdd);