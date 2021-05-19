import React from 'react';

const TaskListItem = () => (
  <li className="taskListItem taskListItem--completed">
    <input type="checkbox" name="checkbox-1" id="checkbox-1" className="taskListItem__input" />
    <label htmlFor="checkbox-1" className="taskListItem__label">Tâche complétée</label>
  </li>
);

export default TaskListItem;
