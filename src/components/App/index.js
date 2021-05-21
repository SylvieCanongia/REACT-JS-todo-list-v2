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

  // onTaskUpdate = (_newValue, taskId) => {
  //   // console.log(`[app] on va mettre à jour la tâche ${taskId}, nouvelle valeur : ${newValue}`);
  //   const { tasks } = this.state;
  //   const taskToUpdate = tasks.find((task) => task.id === taskId);
  //   taskToUpdate.done = !taskToUpdate.done;

  //   this.setState(() => (
  //     // create the new version of the task property
  //     tasks.map((task) => (task.id === taskId ? taskToUpdate : task))
  //   ));
  // }

  onTaskUpdate = (newValue, taskId) => {
    const { tasks } = this.state;
    const newTaskArray = tasks.map((task) => {
      if(task.id === taskId) {
        const taskCopy = {
          id: task.id,
          label: task.label,
          done: newValue,
        };
        return taskCopy;
      }
      return task;
    });

    this.setState({
      tasks: newTaskArray,
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
        <AddTask
          newTaskLabel={newTaskLabel}
          setnewTaskLabel={this.setnewTaskLabel}
          onAddTask={this.onAddTask}
        />
        <TaskCounter nbTasksNotDone={nbTasksNotDone} />
        <TaskList tasks={tasks} onTaskUpdate={this.onTaskUpdate} />
      </div>
    );
  }
}

// == Export
export default App;
