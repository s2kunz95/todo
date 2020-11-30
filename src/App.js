import React, { Component } from 'react';

import './App.css';
import TodoNav from './Containers/TodoNav';
import TodoList from './Containers/TodoList';
import TodoAdd from './Containers/TodoAdd';


import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faListUl, faCheck, faTimesCircle, faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(far, faCalendarCheck, faListUl, faCheck, faTimesCircle, faArrowDown, faPlus);

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoNav />
        <TodoList />
        <TodoAdd />
      </div>
    );
  }
}

export default App;
