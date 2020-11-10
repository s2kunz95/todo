import React, { Component } from 'react';

import TodoItem from '../Components/TodoItem';

import { TodoContext } from '../Contexts/TodoContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoList extends Component {
    render() {
        return (
            <TodoContext.Consumer>
                {
                    ({ List, scrollHiden, scrollBottom , todoList, scrollBtn, bottom }) => (
                        <section className="todoList" onScroll={scrollHiden} ref={todoList}>
                            {
                                List.length > 0 && List.map((item, index) =>
                                    <TodoItem item={item} key={index}/>)
                            }
                            <div className='todoList__scroll' ref={scrollBtn} onClick={scrollBottom}>
                                <FontAwesomeIcon icon='arrow-down' />
                            </div>
                            <div ref={bottom}></div>
                        </section>
                    )
                }
            </TodoContext.Consumer>
        );
    }
}

export default TodoList;