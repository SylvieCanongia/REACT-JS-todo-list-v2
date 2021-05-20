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
  getNbTasksNotDone = () => initialTasks.filter((task) => task.done === false).length;

  render() {
    const nbTasksNotDone = this.getNbTasksNotDone;

    return (
      <div className="app">
        <AddTask />
        <TaskCounter nbTasksNotDone={nbTasksNotDone} />
        <TaskList tasks={initialTasks} />
      </div>
    );
  }
}

// == Export
export default App;
