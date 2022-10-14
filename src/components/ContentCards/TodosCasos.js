import React from 'react';
import PropTypes from 'prop-types';


const TodosCasos = ({ data }) => {
  const { casos } = data;

  return (
    <div className='div'>
      {casos.map((nom, i) => {
        return (

          <div class="row">
            <ul class="list-group">
              <li class="list-group-item" key={i}><p>{nom.caso}</p> <p>{nom.nombre}</p> <p>{nom.description}</p></li>
            </ul>
          </div>

        )
      })}
    </div>
  );
};

TodosCasos.propTypes = {
  data: PropTypes.shape({
    todosCasos: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default TodosCasos;
