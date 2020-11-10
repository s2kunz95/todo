import React, { Component } from 'react';

export const TodoContext = React.createContext();

export class TodoProvider extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
            typing: false,
            actived: false,
            filter: 'all',
            TodoList: JSON.parse(localStorage.getItem('todoList')) || [],
            navList: [
                {
                    style: 'fas',
                    name: 'list-ul',
                    active: true,
                    type: 'all'
                },
                {
                    style: 'far',
                    name: 'calendar-check',
                    active: false,
                    type: 'actived'
                }
            ]
        }
        this.onItemClick = this.onItemClick.bind(this);
        this.isTyping = this.isTyping.bind(this);
        this.addTask = this.addTask.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.scrollBottom = this.scrollBottom.bind(this);
        this.scrollHiden = this.scrollHiden.bind(this);
        this.scrollBtn = React.createRef();
        this.bottom = React.createRef();
        this.todoList = React.createRef();
    }

    onItemClick(item) {
        return () => {
            var { TodoList } = this.state;
            let index = TodoList.indexOf(item);
            this.setState({
                TodoList: [
                    ...TodoList.slice(0, index),
                    {
                        ...item,
                        isComplete: !item.isComplete
                    },
                    ...TodoList.slice(index + 1)
                ]
            })
        }
    }

    removeItem(item) {
        return () => {
            var { TodoList } = this.state;
            let index = TodoList.indexOf(item);
            this.setState({
                TodoList: [
                    ...TodoList.slice(0, index),
                    ...TodoList.slice(index + 1)
                ]
            })
        }
    }

    isTyping() {
        let { newItem, TodoList } = this.state;
        this.setState({
            typing: !this.state.typing
        })
        if (this.state.typing === true) {
            newItem = newItem.trim();
            if (!newItem) {
                return;
            }
            else {
                this.setState({
                    TodoList: [
                        ...TodoList,
                        {
                            title: newItem,
                            isComplete: false
                        },
                    ],
                    newItem: ''
                })
            }
        }
    }

    addTask(event) {
        let { newItem, TodoList } = this.state;
        this.setState({
            newItem: event.target.value
        })
        if (event.keyCode === 13) {
            newItem = newItem.trim();
            if (!newItem) {
                return;
            }
            else {
                this.setState({
                    TodoList: [
                        ...TodoList,
                        {
                            title: newItem,
                            isComplete: false,
                        },
                    ],
                    newItem: '',
                    typing: !this.state.typing
                })
            }
        }
    }

    switchTab(item) {
        let { navList } = this.state;
        let index = navList.indexOf(item);
        return () => {
            this.setState({
                navList: [
                    ...navList.map(function (subitem, subindex) {
                        if (subindex === index) {
                            return {
                                ...subitem,
                                active: true
                            }
                        }
                        else {
                            return {
                                ...subitem,
                                active: false
                            }
                        }
                    })
                ]
            })
            if (item.type === 'all') {
                this.setState({
                    filter: 'all'
                })
            }
            else if (item.type === 'actived') {
                this.setState({
                    filter: 'actived'
                })
            }
        }
    }

    scrollBottom() {
        this.bottom.current.scrollIntoView({ behavior: 'smooth' });
    }

    scrollHiden() {
        let todoList = this.todoList.current;
        let scrollBtn = this.scrollBtn.current;
        if (todoList.scrollHeight - todoList.scrollTop > todoList.offsetHeight + 50) {
            scrollBtn.style.height = '2rem';
        }
        else {
            scrollBtn.style.height = '0';
        }
    }

    checkScroll() {
        let todoList = this.todoList.current;
        let scrollBtn = this.scrollBtn.current;
        if (todoList.scrollHeight <= todoList.offsetHeight + 50) {
            scrollBtn.style.display = 'none';
            scrollBtn.style.height = '0';
        }
        else {
            scrollBtn.style.display = 'block';
            scrollBtn.style.height = '2rem';
        }
    }

    componentDidUpdate() {
        this.checkScroll();
    }

    componentDidMount() {
        this.checkScroll();
    }

    render() {
        let { TodoList, filter } = this.state;
        localStorage.setItem('todoList', JSON.stringify(TodoList));
        if (filter === 'actived') {
            TodoList = TodoList.filter((item) => item.isComplete === true);
        }
        return (
            <TodoContext.Provider value={{
                ProviderState: this.state,
                List: TodoList,
                switchTab: this.switchTab,
                onItemClick: this.onItemClick,
                removeItem: this.removeItem,
                addTask: this.addTask,
                isTyping: this.isTyping,
                scrollHiden: this.scrollHiden,
                scrollBottom: this.scrollBottom,
                todoList: this.todoList,
                scrollBtn: this.scrollBtn,
                bottom: this.bottom
            }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}