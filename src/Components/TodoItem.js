import React, { Component } from 'react';
import '../CSS/TodoItem.css';

import { TodoContext } from '../Contexts/TodoContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItem extends Component {
    render() {
        const { item } = this.props;
        let myClass = 'TodoItem';
        let checkMark = 'checkmark'
        if (item.isComplete) {
            myClass += ' TodoItem--active';
            checkMark += ' checkmark--active';
        }
        return (
            <TodoContext.Consumer>
                {
                    ({ onItemClick, removeItem }) => (
                        <div className={myClass}>
                            <label className="TodoItem__check">
                                <input onClick={onItemClick(item)} type="checkbox" />
                                <div className={checkMark}></div>
                            </label>
                            <p>{item.title}</p>
                            <FontAwesomeIcon className='TodoItem__remove' onClick={removeItem(item)} icon={['far', 'times-circle']} />
                        </div>
                    )
                }
            </TodoContext.Consumer>
        );
    }
}

export default TodoItem;