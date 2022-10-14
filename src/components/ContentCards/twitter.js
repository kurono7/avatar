import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';


const Twitter = ({ data }) => {
  const { twits } = data;

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      {twits.map((attr, i) => {
        return (
          <Accordion.Item eventKey={i.toString()}>
            <Accordion.Header>{attr.fecha}</Accordion.Header>
            <Accordion.Body>
              {attr.text}
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion >
  );

};

Twitter.propTypes = {
  data: PropTypes.shape({
    twitter: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Twitter;