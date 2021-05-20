import React from 'react';
import PropTypes from 'prop-types';

import './taskCounter.scss';

const TaskCounter = ({ nbTasksNotDone }) => (
  <div className="taskCounter">{nbTasksNotDone()} tâche(s) en cours</div>
);

TaskCounter.propTypes = {
  nbTasksNotDone: PropTypes.func.isRequired,
};

export default TaskCounter;
