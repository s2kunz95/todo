import React, { useContext } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CSS/TodoAdd.css';


export default function ({ newItem, typing, isTyping, addTask, TodoList}) {
    return (
        <div className="TodoAdd">
            <div className={classnames('TodoAdd__input', {
                active: typing
            })}>
                <input onKeyUp={addTask} onChange={addTask} type="text" value={newItem} placeholder="Add new task" />
                <button onClick={isTyping} className="TodoAdd__btn">
                    <FontAwesomeIcon className="TodoAdd__btn-plus" icon="plus" />
                    <FontAwesomeIcon className="TodoAdd__btn-check" icon="check" />
                </button>
            </div>
        </div>
    );
}