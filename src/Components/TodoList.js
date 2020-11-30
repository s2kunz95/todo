import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TodoItem from '../Containers/TodoItem';

export default function ({ TodoList, filter }) {
    const todoList = useRef();
    const scrollBtn = useRef();
    const bottom = useRef();

    const scrollBottom = () => {
        bottom.current.scrollIntoView({ behavior: 'smooth' });
    }

    const ScrollHiden = () => {
        let todoListRef = todoList.current;
        let scrollBtnRef = scrollBtn.current;
        if (todoListRef.scrollHeight - todoListRef.scrollTop > todoListRef.offsetHeight + 50) {
            scrollBtnRef.style.height = '2rem';
        }
        else {
            scrollBtnRef.style.height = '0';
        }
    }

    useEffect(() => {
        let todoListRef = todoList.current;
        let scrollBtnRef = scrollBtn.current;
        if (todoListRef.scrollHeight <= todoListRef.offsetHeight + 50) {
            scrollBtnRef.style.display = 'none';
            scrollBtnRef.style.height = '0';
        }
        else {
            scrollBtnRef.style.display = 'block';
            scrollBtnRef.style.height = '2rem';
        }
    })

    localStorage.setItem('todoList', JSON.stringify(TodoList));
    if(filter === 'actived') {
        TodoList = TodoList.filter((item) => item.isComplete === true);
    }

    return (
        <section className="todoList" onScroll={ScrollHiden} ref={todoList}>
            {
                TodoList.length > 0 && TodoList.map((item, index) =>
                    <TodoItem item={item} key={index} />)
            }
            <div className='todoList__scroll' ref={scrollBtn} onClick={scrollBottom}>
                <FontAwesomeIcon icon='arrow-down' />
            </div>
            <div ref={bottom}></div>
        </section>
    );
}