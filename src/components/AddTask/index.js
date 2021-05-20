import React from 'react';
import PropTypes from 'prop-types';

import './addTask.scss';

const AddTask = ({ newTaskLabel, setnewTaskLabel }) => (
  <>
    <div className="addTask">
      <form className="addTask__form">
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
      <div type="button" className="addTask__button">Créer</div>
    </div>
  </>
);

AddTask.propTypes = {
  newTaskLabel: PropTypes.string.isRequired,
  // parameter = newValue
  setnewTaskLabel: PropTypes.func.isRequired,
};

export default AddTask;
