import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input type='checkbox' defaultChecked={state === 'TASK_ARCHIVED'} disabled={true} name='checked' />
        <span className='checkbox-custom' onClick={() => onArchiveTask(id)}></span>
      </label>
      <div className='title'>
        <input type='text' value={title} readOnly={true} placeholder='Input title' />
      </div>

      <div className='actions'>
        {state !== 'TASK_ARCHIVED' && (
          <a
            onClick={(e) => {
              e.preventDefault();
              onPinTask(id);
            }}>
            <span className='icon-star'></span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
