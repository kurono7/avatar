/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Images = ({ data }) => {
  //const { images } = data;
  const { casos } = data;
  // return (
  //   <div className="div">
  //     {images.map((image, i) => {
  //       return (
  //         <img
  //           key={i}
  //           src={image.url}
  //           alt={image.alt}
  //           style={{
  //             maxHeight: '360px',
  //             margin: '0.5rem',
  //             borderRadius: '10%',
  //             width: 'auto',
  //           }}
  //         />
  //       );
  //     })}
  //   </div>
  // );


  return(
    <div className='div'>
        {casos.map(( nom, i) => {
          return(
            <li key={i}>
            <p>{nom.caso}</p>
            <p>{nom.nombre}</p>
            <p>{nom.description}</p>
            </li>
          )
        })}
    </div>
  );
};

Images.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Images;
