import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

const TaskListItem = ({
  id,
  label,
  done,
  onTaskUpdate }) => {
  const checkboxId = `checkbox-${id}`;
  // let cssClass = 'taskListItem';
  // if (done) {
  //   cssClass += ' taskListItem--done';
  // }
  const cssClass = classNames('taskListItem', { 'taskListItem--done': done });

  return (
    <li className={cssClass}>
      <label htmlFor={checkboxId} className="taskListItem__label">
        <input
          type="checkbox"
          name={checkboxId}
          id={checkboxId}
          className="taskListItem__checkbox"
          checked={done}
          onChange={(event) => {
            // console.log('changement checkbox. Nouvelle valeur : ', event.currentTarget.checked);
            onTaskUpdate(event.currentTarget.checked, id);
          }}
        />
        {label}
      </label>
    </li>
  );
};

TaskListItem.propTypes = {
  id: Proptypes.number.isRequired,
  label: Proptypes.string.isRequired,
  done: Proptypes.bool.isRequired,
  onTaskUpdate: Proptypes.func.isRequired,
};

export default TaskListItem;
