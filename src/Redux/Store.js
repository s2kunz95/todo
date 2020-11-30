import { createStore, combineReducers } from 'redux';
import navReducer from './TodoNav';
import todoListReducer from './TodoList';
// import todoAddReducer from './TodoAdd';

const reducer = combineReducers({
    navList: navReducer,
    TodoList: todoListReducer
    // TodoAdd: todoAddReducer
});

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());