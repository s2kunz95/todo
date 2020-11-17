import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TodoItem from '../Components/TodoItem';
import { TodoContext } from '../Contexts/TodoContext';

export default function () {
    const { List, scrollHiden, scrollBottom, todoList, scrollBtn, bottom } = useContext(TodoContext);
    return (
        <section className="todoList" onScroll={scrollHiden} ref={todoList}>
            {
                List.length > 0 && List.map((item, index) =>
                    <TodoItem item={item} key={index} />)
            }
            <div className='todoList__scroll' ref={scrollBtn} onClick={scrollBottom}>
                <FontAwesomeIcon icon='arrow-down' />
            </div>
            <div ref={bottom}></div>
        </section>
    );
}