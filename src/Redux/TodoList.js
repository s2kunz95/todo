const initState = {
    TodoList: JSON.parse(localStorage.getItem('todoList')) || [],
    newItem: '',
    typing: false,
}

const ADD_TASK = 'ADD_TASK';
const TYPING = 'TYPING';
const ITEM_CLICK = 'ITEM_CLICK';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const addTask = (event) => ({
    type: ADD_TASK,
    myEvent: event
});

export const isTyping = () => ({
    type: TYPING
});

export const itemClick = (item) => ({
    type: ITEM_CLICK,
    itemIndex: item
})

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    itemIndex: item
})

const reducer = (state = initState, action) => {
    let index = state.TodoList.indexOf(action.itemIndex);
    switch (action.type) {
        case ADD_TASK:
            if (action.myEvent.keyCode === 13) {
                state.newItem = state.newItem.trim();
                if (!state.newItem) {
                    return state;
                }
                else {
                    return {
                        TodoList: [
                            ...state.TodoList,
                            {
                                title: state.newItem,
                                isComplete: false,
                            },
                        ],
                        newItem: '',
                        typing: !state.typing
                    }
                }
            }
            else {
                return {
                    ...state,
                    newItem: action.myEvent.target.value
                }
            }
        case TYPING:
            if (state.typing === true) {
                state.newItem = state.newItem.trim();
                if (!state.newItem) {
                    return {
                        ...state,
                        typing: !state.typing
                    };
                }
                else {
                    return {
                        typing: !state.typing,
                        TodoList: [
                            ...state.TodoList,
                            {
                                title: state.newItem,
                                isComplete: false
                            },
                        ],
                        newItem: ''
                    }
                }
            }
            else {
                return {
                    ...state,
                    typing: !state.typing
                }
            }
        case ITEM_CLICK:
            return {
                ...state,
                TodoList: [
                    ...state.TodoList.slice(0, index),
                    {
                        ...action.itemIndex,
                        isComplete: !action.itemIndex.isComplete
                    },
                    ...state.TodoList.slice(index + 1)
                ]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                TodoList: [
                    ...state.TodoList.slice(0, index),
                    ...state.TodoList.slice(index + 1)
                ]
            };
        default:
            return state;
    }
}

export default reducer;