import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CSS/TodoNav.css';


export default function ({navList, switchTab}) {
    return (
        <div className="TodoNav">
            <ul className="TodoNav__list">
                {
                    navList.map((item, index) =>
                        <li onClick={() => switchTab(item)} key={index} className={classnames('TodoNav__list-item', {
                            active: item.active === false
                        })}>
                            <FontAwesomeIcon icon={[item.style, item.name]} />
                        </li>)
                }
            </ul>
        </div>
    );
}