import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';


const Periodico = ({ data }) => {
  const { noticias } = data;

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      {noticias.map((attr, i) => {
        return (
          <Accordion.Item eventKey={i.toString()}>
            <Accordion.Header>{attr.fuente}</Accordion.Header>
            <Accordion.Body>
              {attr.text}
              <p style={{ marginTop: "2px" }}><a href={attr.url} target="_blank">Fuente</a></p>
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion >
  );
};

Periodico.propTypes = {
  data: PropTypes.shape({
    periodico: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Periodico;