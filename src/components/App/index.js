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
  state = {
    tasks: initialTasks,
    newTaskLabel: '',
  }

  setnewTaskLabel = (newValue) => {
    this.setState({
      newTaskLabel: newValue,
    });
  }

  render() {
    const {
      tasks,
      newTaskLabel,
    } = this.state;
    const nbTasksNotDone = tasks.filter((task) => task.done === false).length;

    return (
      <div className="app">
        <AddTask newTaskLabel={newTaskLabel} setnewTaskLabel={this.setnewTaskLabel} />
        <TaskCounter nbTasksNotDone={nbTasksNotDone} />
        <TaskList tasks={tasks} />
      </div>
    );
  }
}

// == Export
export default App;
