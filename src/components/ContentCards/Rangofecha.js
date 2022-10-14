import React from 'react';
import PropTypes from 'prop-types';
//import Calendar from 'react-calendar'

const Rangofecha = () => {

    const [value1, value2, onChange] = useState(new Date());
    return(
        <div className='div'> 
            <p>desde</p>
            <input type="date" />
            <p>hasta</p>
            <input type="date"/>
        </div>
    );
}

Rangofecha.propTypes = {
    data: PropTypes.shape({
        rangofecha: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  };
  
  export default Rangofecha;