import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem';

import './taskList.scss';

const TaskList = ({ tasks }) => (
  <ul className="taskList">
    {tasks.map((task) => (
      <TaskListItem id={task.id} label={task.label} done={task.done} key={task.id} />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TaskList;
