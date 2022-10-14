import React from 'react';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { sendTextMessage } from '../../store/sm/index';
import { connect } from 'react-redux';
import styles from "./Options/Options.module.css";

const Markdown = ({ data, dispatchTextFromData }) => {



  const [message, setMessage] = useState('');
  const { type, value } = data;
  const inputRef = useRef('');

  return (
    <div className="card">
      <div className="card-body">
        <p>{value}</p>
        <input type={type} id="message" name="message" ref={inputRef} />
        <button onClick={dispatchTextFromData} className={styles['list-btn']}
        >Enviar</button>
      </div>
    </div>
  );
};

Markdown.propTypes = {
  data: PropTypes.shape({
    markdown: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  dispatchTextFromData: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  dispatchTextFromData: (e) => dispatch(sendTextMessage({ text: '1896' })),
});

export default connect(null, mapDispatchToProps)(Markdown);


