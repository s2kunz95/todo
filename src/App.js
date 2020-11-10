import React, { Component } from 'react';
import './App.css';

import TodoNav from './Components/TodoNav';
import TodoList from './Components/TodoList';
import TodoAdd from './Components/TodoAdd';

import { TodoProvider } from './Contexts/TodoContext';

import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faListUl, faCheck, faTimesCircle, faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(far, faCalendarCheck, faListUl, faCheck, faTimesCircle, faArrowDown, faPlus);

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <div className="App">
          <TodoNav />
          <TodoList />
          <TodoAdd />
        </div>
      </TodoProvider>
    );
  }
}

export default App;
