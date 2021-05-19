// == Import npm
import React from 'react';
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
      <TaskList />
    </div>
    );
  }
};

// == Export
export default App;
