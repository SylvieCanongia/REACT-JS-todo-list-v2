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

  // create an object that represents the new task
  onAddTask = () => {
    const { newTaskLabel, tasks } = this.state;
    const tasksIds = tasks.map((task) => task.id);
    const newTask = {
      id: Math.max(...tasksIds) + 1,
      label: newTaskLabel,
      done: false,
    };

    this.setState(() => ({
      tasks: [...tasks, newTask],
      newTaskLabel: '',
    }));
  }

  render() {
    const {
      tasks,
      newTaskLabel,
    } = this.state;
    const nbTasksNotDone = tasks.filter((task) => task.done === false).length;

    return (
      <div className="app">
        <AddTask
          newTaskLabel={newTaskLabel}
          setnewTaskLabel={this.setnewTaskLabel}
          onAddTask={this.onAddTask}
        />
        <TaskCounter nbTasksNotDone={nbTasksNotDone} />
        <TaskList tasks={tasks} />
      </div>
    );
  }
}

// == Export
export default App;
