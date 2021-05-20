import React from 'react';
import PropTypes from 'prop-types';

import './addTask.scss';

const AddTask = ({ newTaskLabel, setnewTaskLabel, onAddTask }) => {
  const handleSubmitNewTask = (event) => {
    event.preventDefault();
    onAddTask(event.currentTarget.value);
  };

  return (
    <>
      <div className="addTask">
        <form className="addTask__form" onSubmit={handleSubmitNewTask}>
          <input
            type="text"
            className="addTask__input"
            placeholder="Ajouter une tâche"
            value={newTaskLabel}
            onChange={(event) => {
              setnewTaskLabel(event.currentTarget.value);
            }}

          />
        </form>
        <div type="submit" className="addTask__button" onClick={handleSubmitNewTask}>Créer</div>
      </div>
    </>
  );
};

AddTask.propTypes = {
  newTaskLabel: PropTypes.string.isRequired,
  // parameter = newValue
  setnewTaskLabel: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
