import React, { Component } from 'react';
import '../CSS/TodoAdd.css';
import classnames from 'classnames';

import { TodoContext } from '../Contexts/TodoContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoAdd extends Component {
    render() {
        return (
            <div className="TodoAdd">
                <TodoContext.Consumer>
                    {
                        ({ ProviderState, addTask, isTyping }) => (
                            <div className={classnames('TodoAdd__input', {
                                active: ProviderState.typing
                            })}>
                                <input onKeyUp={addTask} onChange={addTask} type="text" value={ProviderState.newItem} placeholder="Add new task" />
                                <button onClick={isTyping} className="TodoAdd__btn">
                                    <FontAwesomeIcon className="TodoAdd__btn-plus" icon="plus" />
                                    <FontAwesomeIcon className="TodoAdd__btn-check" icon="check" />
                                </button>
                            </div>
                        )
                    }
                </TodoContext.Consumer>
            </div>
        );
    }
}

export default TodoAdd;