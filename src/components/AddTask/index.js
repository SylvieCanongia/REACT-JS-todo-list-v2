import React from 'react';

import './addTask.scss';

const AddTask = () => (
  <>
    <div className="addTask">
      <form className="addTask__form">
        <input type="text" className="addTask__input" placeholder="Ajouter une tâche" />
      </form>
      <div type="button" className="addTask__button">Créer</div>
    </div>
  </>
);

export default AddTask;
