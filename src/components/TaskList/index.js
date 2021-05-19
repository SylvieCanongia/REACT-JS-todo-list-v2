import React from 'react';

import './taskList.scss';

const taskList = () => (
  <ul className="taskList">
    <li className="taskListItem taskListItem--completed">
      <input type="checkbox" name="checkbox-1" id="checkbox-1" className="taskListItem__input" />
      <label htmlFor="checkbox-1" className="taskListItem__label">Goûter</label>
    </li>
    <li className="taskListItem">
      <input type="checkbox" name="checkbox-2" id="checkbox-2" className="taskListItem__input" />
      <label htmlFor="checkbox-2" className="taskListItem__label">Se promener</label>
    </li>
    <li className="taskListItem">
      <input type="checkbox" name="checkbox-3" id="checkbox-3" className="taskListItem__input" />
      <label htmlFor="checkbox-3" className="taskListItem__label">Faire les courses</label>
    </li>
  </ul>
);

export default taskList;
