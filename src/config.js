/* eslint-disable import/prefer-default-export */
// import ibmLogo from './img/IBM_logo.svg';
import carnivalLogo from './img/Fiscal-logo.png';
import Caso1 from './img/caso2.jpg';
import Caso2 from './img/caso1.JPG';
import Caso3 from './img/caso3.JPG';

import Zona1 from './img/zona1.jpg';
import Zona2 from './img/zona2.jpg';
import Zona3 from './img/zona3.jpg';

import fondo from './img/fond.png';
// header will not take up vertical height when transparent, so you need to be mindful of overlap
export const transparentHeader = true;
export const headerHeight = '8rem';
export const logo = carnivalLogo;
export const logoAltText = 'IBM logo';
export const logoLink = '/';
export const uno = Caso1;
export const dos = Caso2;
export const tres = Caso3;

export const cuatro = Zona1;
export const cinco = Zona2;
export const seis = Zona3;

// background image is positioned in a way that is best for pictures of the persona's face.
// adjust spacing as necessary in Landing.js for different images
// if you want just a color, set landingBackgroundImage to null
// if desired, a gradient can also be added to landingBackgroundColor
export const landingBackgroundColor = '#fff';
export const landingBackgroundImage = fondo;

// if set to true, on disconnect, the app will redirect to the specified route.
// if false, it will redirect to /
export const disconnectPage = false;
export const disconnectRoute = '/feedback';
