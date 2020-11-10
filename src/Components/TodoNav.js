import React, { Component } from 'react';
import '../CSS/TodoNav.css';
import classnames from 'classnames';

import { TodoContext } from '../Contexts/TodoContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoNav extends Component {
    render() {
        return (
            <div className="TodoNav">
                <ul className="TodoNav__list">
                    <TodoContext.Consumer>
                        {
                            ({ProviderState, switchTab}) => (
                                ProviderState.navList.map((item, index) =>
                                <li onClick={switchTab(item, index)} key={index} className={classnames('TodoNav__list-item', {
                                    active: item.active === false
                                })}>
                                    <FontAwesomeIcon icon={[item.style, item.name]} />
                                </li>)
                            )
                        }
                    </TodoContext.Consumer>
                </ul>
            </div>
        );
    }
}

export default TodoNav;