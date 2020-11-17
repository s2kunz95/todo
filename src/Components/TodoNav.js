import React, { useContext } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CSS/TodoNav.css';
import { TodoContext } from '../Contexts/TodoContext';


export default function () {
    const { ProviderState, switchTab } = useContext(TodoContext);
    return (
        <div className="TodoNav">
            <ul className="TodoNav__list">
                {
                    ProviderState.navList.map((item, index) =>
                        <li onClick={switchTab(item, index)} key={index} className={classnames('TodoNav__list-item', {
                            active: item.active === false
                        })}>
                            <FontAwesomeIcon icon={[item.style, item.name]} />
                        </li>)
                }
            </ul>
        </div>
    );
}