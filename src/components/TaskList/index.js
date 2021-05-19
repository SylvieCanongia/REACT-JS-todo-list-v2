import React from 'react';

import './taskList.scss';
import TaskListItem from './TaskListItem';

const TaskList = () => (
  <ul className="taskList">
    <TaskListItem />
    <TaskListItem />
    <TaskListItem />
    <li className="taskListItem">
      <input type="checkbox" name="checkbox-1" id="checkbox-1" className="taskListItem__input" />
      <label htmlFor="checkbox-1" className="taskListItem__label">Tâche non complétée</label>
    </li>
  </ul>
);

export default TaskList;
