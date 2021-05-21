import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem';

import './taskList.scss';

const TaskList = ({ tasks, onTaskUpdate }) => (
  <ul className="taskList">
    {tasks.map((task) => (
      <TaskListItem
        key={task.id}
        {...task}
        onTaskUpdate={onTaskUpdate}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
};

export default TaskList;
