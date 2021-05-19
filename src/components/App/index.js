// == Import npm
import React from 'react';
import initialTasks from 'src/data/tasks';

import AddTask from '../AddTask';
import TaskCounter from '../TaskCounter';
import TaskList from '../TaskList';


// == Import
import './styles.scss';

// == Composant
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AddTask />
        <TaskCounter />
        <TaskList tasks={initialTasks} />
      </div>
    );
  }
}

// == Export
export default App;
