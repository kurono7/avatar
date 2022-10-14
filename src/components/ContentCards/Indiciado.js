import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import styles from './Cards.module.css';


const Indiciado = ({ data }) => {
  const { Expedientes, indiciado } = data;

  return (
    <div>  <h2 style={{ fontSize: "1.5rem", textAlign: "center" }}>{`Número de casos encontrados: ${Expedientes.length}`}</h2>
      <div className={styles.container} style={{
        overflowY: 'scroll', width: '450px',
        height: '426px', position: 'relative'
      }}>

        {Expedientes.map((attr, i) => {
          return (
            <Card className={styles.cardIndiciado}>
              <Card.Body>
                <Card.Title>{`INDICIADO ${indiciado}`}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Información encontrada</Card.Subtitle>
                <Card.Text>
                  <p>{`Caso No. ${attr.Caso}`}</p>
                  <p>{`Delito : ${attr.delito}`}</p>
                  <p>{`Etapa : ${attr.etapa}`}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div></div>
  );
};

Indiciado.propTypes = {
  data: PropTypes.shape({
    indiciado: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Indiciado;


