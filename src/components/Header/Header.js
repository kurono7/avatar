/** */
import React from 'react';
import { logo, logoAltText, transparentHeader, headerHeight } from '../../config';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles['header__logo-box']}>
      {/* <img src={logo} className={styles.header__logo} alt={logoAltText} /> */}
    </div>
    <div className={styles['header__text-box']}>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fiscal%C3%ADa_General_de_la_Naci%C3%B3n_%28Colombia%29_logo.svg/800px-Fiscal%C3%ADa_General_de_la_Naci%C3%B3n_%28Colombia%29_logo.svg.png" className={styles.header__logo} alt={logoAltText} 
       style={{height: "5.2rem", margin: "2rem 1rem" }} />
      <div className={styles['heading-primary--main']} style={{margin:"0rem 1.4rem -0.3rem", fontSize:"1.5rem"}}>Asistente CEVAP</div>
      <div className={styles['heading-primary--main']} style={{margin:"0rem 1.4rem", fontSize:"1.5rem"}}>Fiscalía General de la Nación</div>
      {/* <div className={styles['heading-primary--sub']}>Tu asistente virtual investigativo</div> */}
    </div>
  </header>
);

export default Header;



// height: 5.2rem;
// margin: 2rem 1rem;


// 0rem 1.5rem