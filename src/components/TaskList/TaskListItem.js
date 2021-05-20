import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

const TaskListItem = ({ id, label, done }) => {
  const checkboxId = `checkbox-${id}`;
  // let cssClass = 'taskListItem';
  // if (done) {
  //   cssClass += ' taskListItem--done';
  // }
  const cssClass = classNames('taskListItem', { 'taskListItem--done': done });

  return (
    <li className={cssClass}>
      <label htmlFor={checkboxId} className="taskListItem__label">
        <input type="checkbox" name={checkboxId} id={checkboxId} className="taskListItem__checkbox" />
        {label}
      </label>
    </li>
  );
};

TaskListItem.propTypes = {
  id: Proptypes.number.isRequired,
  label: Proptypes.string.isRequired,
  done: Proptypes.bool.isRequired,
};

export default TaskListItem;
