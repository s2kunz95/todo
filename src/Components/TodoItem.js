import React, { useContext } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CSS/TodoItem.css';
import { TodoContext } from '../Contexts/TodoContext';

export default function (props) {
    const { item } = props;
    const { onItemClick, removeItem } = useContext(TodoContext);
    return (
        <div className={classnames('TodoItem', {
            'TodoItem--active': item.isComplete
        })}>
            <label className="TodoItem__check">
                <input onClick={onItemClick(item)} type="checkbox" />
                <div className={classnames('checkmark', {
                    'checkmark--active': item.isComplete
                })}></div>
            </label>
            <p>{item.title}</p>
            <FontAwesomeIcon className='TodoItem__remove' onClick={removeItem(item)} icon={['far', 'times-circle']} />
        </div>
    );
}