/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../ContentCards/Options/Options.module.css';
import { ArrowUpRightSquare } from 'react-bootstrap-icons';

const Link = ({ data, className }) => {
  const { title, url, imageUrl, description } = data;
  // return (
  //   <div className={className}>
  //     <div className="card">
  //       <div className="d-flex justify-content-center">
  //         {/* we can pass either description or imageAltText to alt property */}
  //         <img src={imageUrl} alt={description} />
  //       </div>
  //       <div className="card-body">
  //         <h5>{title}</h5>
  //         <p>{description}</p>
  //         <div className="d-flex justify-content-center">
  //           {/* open link in new tab */}
  //           <a
  //             href={url}
  //             className="btn btn-primary"
  //             target="_blank"
  //             rel="noreferrer"
  //           >
  //             Visit Link
  //             <ArrowUpRightSquare />
  //           </a>
  //         </div>
  //         <button>Caso especifico  </button>
  //         <button>Muestrame todos los casos</button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return(
    <div className={className}>
      <div className={styles.container}>
        <button  className={styles['list-btn']}>Todos los casos </button>
        
        <button  className={styles['list-btn']}> Homicidio por caso</button>
      </div>
    </div>
  );
};

Link.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // imageAltText: PropTypes.string,
  }).isRequired,
};

export default styled(Link)`
  width: 20rem;

  img {
    width: auto;
    height: auto;
  }
`;
