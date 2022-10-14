import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendTextMessage } from '../../store/sm/index';
import styles from '../ContentCards/Options/Options.module.css';

const Respuesta = ({ data, dispatchTextFromData }) => {
  const { message, options, consecutivo, Ciudad, lugar } = data;
  const optionsDisplay = options.map(({ label, value }) => (
    <button
      type="button"
      className={styles['list-btn']}
      data-trigger-text={value}
      onClick={dispatchTextFromData}
      key={JSON.stringify({ label, value })}
    >
      {label}
    </button>
  ));
  return (
    <div className="card" style={{ margin: "10.5rem 0.1rem 5rem", background: "#e0f3ff", borderRadius: "30px" }}>
      <div classname="card-header" style={{ background: '716ed2' }}>
        <h3 style={{ padding: '15px', fontSize: "1.4rem" }}>{`Expediente No. ${consecutivo}`}</h3>
      </div>
      <div class="card-body">
        <h5 class="card-title">Información Solicitada</h5>
        <p>{`${Ciudad} - ${lugar}`}</p>
        <p class="card-text">{data.text}</p>
        <div className={styles.container}>{optionsDisplay}</div>

        <p></p>
      </div>
      <br></br>
    </div>
  );
}

Respuesta.propTypes = {
  data: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
    respuesta: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  dispatchTextFromData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchTextFromData: (e) => dispatch(sendTextMessage({ text: e.target.dataset.triggerText })),
});

export default connect(null, mapDispatchToProps)(Respuesta);
